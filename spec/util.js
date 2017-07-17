const fs = require("fs");

module.exports = {
  loadExample: function loadExample(name) {
    return JSON.parse(fs.readFileSync("./reference/" + name).toString());
  }
};