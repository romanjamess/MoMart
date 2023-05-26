const mongoose = require('mongoose');

const connectTo =  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/thingamabobs';
console.log("mongo connection is right here =>", connectTo)
mongoose.connect(
  connectTo 
);

module.exports = mongoose.connection;
