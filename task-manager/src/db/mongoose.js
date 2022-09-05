const mongoose = require("mongoose");
const connectionURL = "mongodb://127.0.0.1:27017/task-manager-api";

// connect to the database
mongoose.connect(connectionURL, {
  useNewUrlParser: true,
});

// Define a model
const User = mongoose.model("users", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

// Create a Instance of User Model
const me = new User({
  name: "Ratul",
  age: 30,
});

// Save the instance to the database
me.save()
  .then((me) => {
    console.log(me);
  })
  .catch((error) => {
    console.log("Error!", error);
  });
