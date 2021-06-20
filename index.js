var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("code: " + req.query.code);

  // to process the code recieved call the TOKEN endpoint
});

app.listen(3000);
