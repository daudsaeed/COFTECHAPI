var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var packageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    users: Number,
    devices: Number,
    storage: String,
    live_chat: Boolean,
    free_customer_support: Boolean,
  },
  custom: Boolean,
});

module.exports = mongoose.model("Package", packageSchema);
