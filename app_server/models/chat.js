var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ChatSchema = new Schema({
  //Id, message
  cid: {
    type: mongoose.Types.ObjectId,
    ref: "Customer",
  },
  messages: {
    type: [{
        sid: {
            type: mongoose.Types.ObjectId,
            ref: 'Message'
        }
    }],
    default: []
  }
});

module.exports = mongoose.model("Chat", ChatSchema);
