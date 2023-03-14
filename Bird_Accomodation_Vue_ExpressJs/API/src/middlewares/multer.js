const multer = require('multer');
const path = require("path");

const storageFile = multer.diskStorage({
    destination: function(req, file, cb)
    {
        cb(null, './files');
    },
    filename: function(req, file, cb)
    {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

const storageReport = multer.diskStorage({
    destination: function(req, file, cb)
    {
        cb(null, './reports');
    },
    filename: function(req, file, cb)
    {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

exports.upload = multer({
    storage: storageFile,
    limits: {
        // 5Mbs
        fileSize: 1024 * 1024 * 5
    }
});

exports.uploadReport = multer({
    storage: storageReport,
    limits: {
        // 5Mbs
        fileSize: 1024 * 1024 * 5
    }
});