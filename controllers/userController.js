const User = require('../models/userSchema');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

exports.register = async (req, res) => {
    const {firstName, lastName, email, phone, password, work, description, fresher} = req.body;
    try {
        const user = new User({firstName, lastName, email, phone, password, work, description, fresher});
        await user.save();
        return res.status(200).json({"message" : "Registration successfully."});
    } catch (error) {
        return res.status(401).json({ "message" : error.message });
    }
}