const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 3000;
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

// app.use((req, res, next) => {

//     res.status(503).send("We are on Maintenance . Please try again later");

// });

// Automatic parse incoming JSON to an object
dotenv.config();
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
