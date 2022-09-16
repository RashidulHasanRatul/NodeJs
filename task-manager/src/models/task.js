const mongoose = require("mongoose");
const validator = require("validator");

const taskSchema = new mongoose.Schema({
  tittle: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

taskSchema.pre("save", async function (next) {
  const task = this;
  if (task.isModified("completed")) {
    task.completed = await task.completed;
  }
  next();
});

const Task = mongoose.model("tasks", taskSchema);

module.exports = Task;
