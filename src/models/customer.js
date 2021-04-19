const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: null,
    min: 3,
    max: 30,
  },
  contact: {
    type: String,
    required: true,
    default: null,
  },
  address: {
    type: String,
    default: null,
  },
  discount: {
    type: Number,
    default: null,
  },
  discount_type: {
    type: String,
    enum: ["FIX", "PERCENTAGE"],
    default: "FIX",
  },
  id_card: {
    type: String,
  },
});

module.exports = mongoose.model("customers", CustSchema);
