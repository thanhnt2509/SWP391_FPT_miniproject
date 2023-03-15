const multerInstance = require("../middlewares/multer");
const express = require('express')
const router = express.Router()
router.post('/upload_image', multerInstance.upload.single('image'), function(req, res, next) {

    try
    {
        console.log(req.file.path);
        res.status(200).send("success")
    }
    catch (err)
    {
        res.status(500).send(err);
    }

});

router.get('/get_img/:img_path', function(req, res, next) {
    const { img_path } = req.params;
    try {
        res.status(200).sendFile(img_path, { root: './files' });
    }catch (e) {
        res.status(500).send(e);
    }
})

router.get('/get_report_img/:img_path', function(req, res, next) {
    const { img_path } = req.params;
    try {
        res.status(200).sendFile(img_path, { root: './reports' });
    }catch (e) {
        res.status(500).send(e);
    }
})

module.exports = router