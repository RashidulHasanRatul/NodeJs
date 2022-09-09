const mongoose = require("mongoose");
const dburl = "mongodb://127.0.0.1:27017/task-manager-api";

// connect to the database
mongoose.connect(dburl, {
  useNewUrlParser: true,
});

// Define a model
const Task = mongoose.model("tasks", {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

// Create a Instance of Task Model
const task = new Task({
  description: "Learn Mongoose",
  completed: false,
});

// Save the instance to the database
task
  .save()
  .then((task) => {
    console.log(task);
  })
  .catch((error) => {
    console.log("Error!", error);
  });
