'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
app.use(bodyParser.json({ limit: '1mb' }));

app.use("/api/v1/file", require("./routes/file"));

var server = app.listen(8000, () => {
    console.log('info', `App is running in port 8000`, 'App default port')
});
server.setTimeout(500000);


module.exports = app;