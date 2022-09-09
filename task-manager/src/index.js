const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
// Automatic parse incoming JSON to an object
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
