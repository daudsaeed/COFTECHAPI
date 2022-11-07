var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
  user_type: {
    type: String, //admin or user
    default: "customer",
  },
});

module.exports = mongoose.model("User", userSchema);
