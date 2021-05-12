const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require("crypto");

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
    hashed_password: {
		type: String,
		required: true
	},
	salt: String,
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

userSchema
	.virtual("password")
	.set(function (password) {

		//create a temporarity variable called password
		this._password = password;

		//gererate salt
		this.salt = this.makeSalt();

		//encryptPassword
		this.hashed_password = this.encryptPassword(password);
	})
	.get(function () {
		return this._password;
	});

userSchema.methods = {
	authenticate: function (plainText) {
		return this.encryptPassword(plainText) === this.hashed_password;
	},

	encryptPassword: function (password) {
		if (!password) return "";
		try {
			return crypto
				.createHmac("sha1", this.salt)
				.update(password)
				.digest("hex");
		} catch (err) {
			return "";
		}
	},

	makeSalt: function () {
		return Math.round(new Date().valueOf() * Math.random()) + "";
	},
};

module.exports = mongoose.model('User', userSchema);