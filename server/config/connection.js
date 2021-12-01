const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/catalog', {});

module.exports = mongoose.connection;
