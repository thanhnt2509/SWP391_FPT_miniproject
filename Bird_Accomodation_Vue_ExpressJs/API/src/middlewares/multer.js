const multer = require('multer');
const path = require("path");

const storageFile = multer.diskStorage({
    destination: function(req, file, cb)
    {
        cb(null, './store/files');
    },
    filename: function(req, file, cb)
    {
        // cb(null, new Date().getTime() + path.extname(file.originalname));
        cb(null, file.originalname);
    }
});

const storageReport = multer.diskStorage({
    destination: function(req, file, cb)
    {
        cb(null, './store/reports');
    },
    filename: function(req, file, cb)
    {
        cb(null, file.originalname);
    }
});

const storageBird = multer.diskStorage({
    destination: function(req, file, cb)
    {
        cb(null, './store/birds');
    },
    filename: function(req, file, cb)
    {
        cb(null, file.originalname);
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

exports.uploadBird = multer({
    storage: storageReport,
    limits: {
        // 5Mbs
        fileSize: 1024 * 1024 * 5
    }
});