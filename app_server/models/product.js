var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  //Id, name, detail
  name: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  service_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
