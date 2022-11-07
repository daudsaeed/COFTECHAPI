var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var subscriptionSchema = new Schema({
  cid: {
    type: mongoose.Types.ObjectId,
    ref: "Customer",
  },
  pid: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
  },
  packageid: {
    type: mongoose.Types.ObjectId,
    ref: "Package",
  },
});

module.exports = mongoose.model("Subscription", subscriptionSchema);
