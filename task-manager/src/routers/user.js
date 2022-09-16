const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");
const router = new express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
router.post("/users", async (req, res) => {
  try {
    const OldUser = await User.findOne({ email: req.body.email });
    if (OldUser) {
      return res.status(400).send({ error: "User already exists" });
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).send("Sign up successful");
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send("User not found");
    }
    console.log(req.body.password);
    console.log(user.password);
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    console.log("Is Match" + isMatch);
    if (isMatch) {
      // generate token
      const token = jwt.sign(
        { _id: user._id.toString() },
        process.env.JWT_SECRET,
        {
          expiresIn: "7 days",
        }
      );
      user.tokens = user.tokens.concat({ token });
      await user.save();

      res.send({
        token: token,
        message: "Login successful",
      });
    } else {
      return res.status(400).send("Unable to login");
    }
  } catch (e) {
    res.status(400).send({ error: "Authentication Failed" });
  }
});

// user logout
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send("Logout successful");
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

// logout from all devices
router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send("Logout ALL successful");
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

// get all users
router.get("/users", auth, async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

// get my profile
router.get("/users/me", auth, async (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.status(404).send("No User Found");
  }
});

// get user by id
router.get("/users/:id", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

// update user by id
router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

// delete user by id
router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send("No User Found");
    }
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
