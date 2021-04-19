const mongoose = require("mongoose");
require('dotenv').config()
function mongoConnect() {
  mongoose.connect(`mongodb://${process.env.MONGO_DB}`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
}

module.exports = mongoConnect();
