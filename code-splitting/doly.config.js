const path = require("path");

module.exports = {
  html: {
    title: "Code Splitting",
    template: "src/document.ejs",
    filename: "index.html"
  },

  // 别名
  alias: {
    "~": path.join(__dirname, "./src")
  },

  env: {
    production: {
      publicPath: "./"
    }
  }
};
