const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("client/build"));

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});
