const multer = require("multer");

const storage = multer.memoryStorage();

module.exports = multer({ storage });
console.log("Multer middleware loaded");