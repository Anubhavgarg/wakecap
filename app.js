'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use("/api/v1/file", require("./routes/file"));

var server = app.listen(8000, () => {
    logger.log('info', `App is running in port 8000`, 'App default port')
});
server.setTimeout(500000);


module.exports = app;