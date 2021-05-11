const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    work : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    profileImage : {
        type : String
    },
    fresher : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('User', userSchema);