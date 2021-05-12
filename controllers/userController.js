const User = require('../models/userSchema');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        // rejects storing a file
        cb(null, false);
    }
}

exports.register = async (req, res) => {
    
    try {
        let upload = multer({ storage: storage, fileFilter: fileFilter }).single('profileImage');
        
        upload(req, res, function(err) {
            // req.file contains information of uploaded file
            // req.body contains information of text fields, if there were any
            
            if (req.fileValidationError) {
                return res.status(401).json({ "message" : req.fileValidationError });
            }
            else if (!req.file) {
                return res.status(401).json({ "message" : 'Please select an image to upload' });
            }
            else if (err instanceof multer.MulterError) {
                return res.status(401).json({ "message" : err.message });
            }
            else if (err) {
                return res.status(401).json({ "message" : err.message });
            }
            const {firstName, lastName, email, phone, password, work, description, fresher} = req.body;
            /* console.log(req.file.filename);
            console.log(req.file.path); */
            const user = new User({firstName, lastName, email, phone, password, work, description, fresher, profileImage:req.file.path});
            user.save();
            return res.status(200).json({"message" : "Registration successfully."});
        });
    } catch (error) {
        return res.status(401).json({ "message" : error.message });
    }
}