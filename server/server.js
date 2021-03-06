const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.join(__dirname, "..", "build");
const port = process.env.PORT || 3001;

app.use(express.static(publicPath));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(port, () => {
  console.log("Server is up!!");
});
