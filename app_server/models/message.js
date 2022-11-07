var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var messageSchema = new Schema({  
  sid: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  rid: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  time: {
    type: Date,
    default : Date.now,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  }

});

module.exports = mongoose.model("Message", messageSchema);
