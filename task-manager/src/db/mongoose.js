const mongoose = require("mongoose");
const validator = require("validator");
const connectionURL = "mongodb://127.0.0.1:27017/task-manager-api";

// connect to the database
mongoose.connect(connectionURL, {
  useNewUrlParser: true,
});

// Define a model
const User = mongoose.model("users", {
  name: {
    type: String,
    required: true,
    trim: true,
    // validate the string
    validate(value) {
      if (value.length < 2) {
        throw new Error("Name must be longer than 2 characters");
      }
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,

    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },

  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
});

// Create a Instance of User Model
const me = new User({
  name: "Rr",
  age: 30,
  email: "RASHIDUL@GMAIL.COM ",
});


// Save the instance to the database
me.save()
  .then((me) => {
    console.log(me);
  })
  .catch((error) => {
    console.log("Error!", error);
  });
