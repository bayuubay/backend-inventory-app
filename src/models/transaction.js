const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TrxSchema = new Schema({
  trx_date: {
    type: Date,
    required: true,
    default: new Date(),
  },
  cust_id: {
    type: Schema.Types.ObjectId,
    ref: "customers",
    required: true,
    default: null,
  },
  items: [
    {
      items_id: {
        type: Schema.Types.ObjectId,
        ref: "items",
        default: null,
      },
      qty: {
        type: Number,
      },
    },
  ],
  total_disc: {
    type: Number,
  },
  total_cost: {
    type: Number,
  },
  total_payment: {
    type: Number,
  },
});

module.exports = mongoose.model("transactions", TrxSchema);
