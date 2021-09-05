var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("code: " + req.query.code);

  // to process the code recieved call the TOKEN endpoint
  // https://docs.aws.amazon.com/cognito/latest/developerguide/token-endpoint.html
});

app.listen(3000);
