const express = require("express");
const Task = require("../models/task");
const router = new express.Router();

router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    const SavedTask = await task.save();
    res.status(201).send(SavedTask);
  } catch (e) {
    res.status(400).send(e);
  }
});

// get all tasks
router.get("/tasks", async (req, res) => {
  try {
    const task = await Task.find({});
    if (!task) {
      return res.status(404).send("Not Task Found");
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

// get task by id
router.get("/tasks/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send("No Task Found");
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

// update task by id
router.patch("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).send("No Task Found");
    }
    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Delete task by id

router.delete("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findByIdAndDelete(_id);
    if (!task) {
      return res.status(404).send("No Task Found");
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
