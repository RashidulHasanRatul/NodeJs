const fs = require("fs");

const appendFiles = function (fileName, Data) {
  fs.appendFileSync(fileName, Data);
};

const getNotes = function (fileName) {
  return fs.readFileSync(fileName, "utf8");
};

module.exports = { appendFiles, getNotes };
