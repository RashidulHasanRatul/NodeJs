require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("6319b0f59478fdd67313cbb4")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id, completed) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed });
  return count;
};

deleteTaskAndCount("6317a2ccbb40e3abca37c59d", false)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
