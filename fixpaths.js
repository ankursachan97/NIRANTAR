// fixPaths.js
const fs = require("fs");
const path = require("path");

const buildPath = path.join(__dirname, "build", "index.html");

fs.readFile(buildPath, "utf8", function (err, data) {
  if (err) {
    return console.log("Error reading index.html:", err);
  }

  let result = data;

  // Ensure assets start with ./nirantar instead of /nirantar
  result = result.replace(/\/nirantar\//g, "./nirantar/");

  fs.writeFile(buildPath, result, "utf8", function (err) {
    if (err) return console.log("Error writing index.html:", err);
    console.log("✅ Paths fixed successfully in index.html");
  });
});
