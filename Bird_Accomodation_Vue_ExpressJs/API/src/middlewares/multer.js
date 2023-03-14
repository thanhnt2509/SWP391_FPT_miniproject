const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    destination: function(req, file, cb)
    {
        cb(null, './files');
    },
    filename: function(req, file, cb)
    {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

exports.upload = multer({
    storage: storage,
    limits: {
        // 5Mbs
        fileSize: 1024 * 1024 * 5
    }
});