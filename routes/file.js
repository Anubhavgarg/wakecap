var fs = require("fs");
const multer = require("multer");
var router = require("express").Router();
const upload = multer({ dest: "temp/" });
const path = require("path");

router.post("/", upload.single("upload"), (req, res) => {
    var fileInfo = req.file;
    // var ext = path.extname(fileInfo.originalname);
    var filepath = fileInfo.path;
    console.log(filepath, "assasad")
});

module.exports = router;