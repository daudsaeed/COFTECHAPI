var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  }
});

module.exports = mongoose.model("Customer", customerSchema);
