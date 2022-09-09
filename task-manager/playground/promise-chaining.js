require("../src/db/mongoose");
const User = require("../src/models/user");

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate("631a37a2ecd610d9821d3172", {
    age: 3,
  });
  const count = await User.countDocuments({ age: age });
  return count;
};
updateAgeAndCount("631a37a2ecd610d9821d3172", 3)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });

// User.findByIdAndUpdate("631a37a2ecd610d9821d3172", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
