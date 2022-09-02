const fs = require("fs");
const { appendFiles, getNotes } = require("./notes.js");
const validator = require("validator");
fs.writeFileSync("notes-app/Notes.txt", "Hello Bangldesh");
//fs.appendFileSync("notes-app/Notes.txt", "This is my first note");
appendFiles("notes-app/Notes.txt", "This is my third note");

const AfterGettingNotes = getNotes("notes-app/Notes.txt");
console.log(AfterGettingNotes);

console.log(validator.isEmail("test@gmail.com"));
