// Define a model
const mongoose = require("mongoose");
const validator = require("validator");

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

  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password cannot contain 'password'");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
  },
});

module.exports = User;
