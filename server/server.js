const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');
const cors = require('cors');
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gamerShelfDB", {
  useNewUrlParser: true
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});

