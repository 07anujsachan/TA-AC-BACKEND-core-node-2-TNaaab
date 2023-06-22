var path = require("path");
var absolutePath = __dirname;

console.log(absolutePath);
console.log("./index.js");

var indexPath = path.join(absolutePath, "index.js");
console.log(indexPath);