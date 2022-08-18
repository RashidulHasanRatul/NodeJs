const excelToJson = require("convert-excel-to-json");
const result = excelToJson({
  sourceFile: "./file-repo/sample-new.xlsx",
  columnToKey: {
    A: "name",
    B: "age",
    C: "address",
    D: "phone",
  },
});
console.log(result);
