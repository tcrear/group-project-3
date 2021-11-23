var express = require("express");
var mongoose = require("mongoose");
var routes = require('./routes');

var app = express();
var PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gamerShelfDB", {
  useNewUrlParser: true
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
