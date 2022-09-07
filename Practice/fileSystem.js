const fs = require("fs");
const dirPath = "./file-repo";
const filePath = "./file-repo/sample-new.txt";

// sync -blocking code

// read file
const fileContent = fs.readFileSync(filePath, "utf8");
console.log(fileContent);
// write file
fs.writeFileSync(filePath, "Hello World");
console.log("AFter File written := " + fileContent);
// Append file
fs.appendFileSync(filePath, "Hello Bangladesh");
console.log("AFter File append := " + fileContent);

// rename file
fs.renameSync(filePath, "./file-repo/sample-new.txt");
console.log("AFter File Rename := " + fileContent);

// delete file
// fs.unlinkSync("./file-repo/sample-new.txt");
// console.log("AFter File Delete := " + fileContent);

// get file name and extension from directory
const files = fs.readdirSync(dirPath);
console.log(files);






