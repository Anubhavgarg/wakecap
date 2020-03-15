var fs = require("fs");
const multer = require("multer");
var router = require("express").Router();
const upload = multer({ dest: "temp/" });
const path = require("path");

router.post("/", upload.single("file"), async(req, res) => {
    var fileInfo = req.file;
    var filepath = fileInfo.path;
    console.log(`the file information is `, filepath)
    console.log("Here is the output")
    await fs.readFile(filepath, 'utf8', function(err, contents) {
        console.log(contents);
    });
    return res.status(200).send({
        success: 200,
        response: "Output done"
    })
});

module.exports = router;