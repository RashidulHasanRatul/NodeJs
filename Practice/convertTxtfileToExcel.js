const fs = require("fs");
const dirPath = "./file-repo";
const filePath = "./file-repo/sample-new.txt";
// convert txt file to excel file
const excel = require("excel4node");
const workbook = new excel.Workbook();
const worksheet = workbook.addWorksheet("Sheet 1");
const arr = ["name", "age", "address", "phone"];
// read file
const fileContent = fs.readFileSync(filePath, "utf8");

//worksheet.cell(1, 1).string("Hello World");
workbook.write("./file-repo/sample-new.xlsx");
console.log("AFter File Convert := " + fileContent);
arr.forEach((item, index) => {
  worksheet.cell(1, index + 1).string(item);
});
