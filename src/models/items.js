const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: null,
    min: 3,
    max: 30,
  },
  unit: {
    type: Number,
    default: null,
  },
  stock: {
    type: Number,
    default: null,
  },
  price: {
    type: Number,
 
  },
  item_image: {
    type: String,
  },
});

module.exports = mongoose.model("items", ItemSchema);
