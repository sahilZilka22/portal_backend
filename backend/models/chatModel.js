// import mongoose
// define model schema
const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
    chatName : {
        type : String,
        trim : true,
    },
    isGroupChat : {
        type : Boolean,
        default : false,
    },
    users : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }],
    latestMessage : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "new messages",
    },
    groupAdmin : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    }
},
{timestamps : true}
);

module.exports = mongoose.model("Chat",chatSchema);
// chatName
// isGroupChat
// users
// latestMessage
// groupAdmin
