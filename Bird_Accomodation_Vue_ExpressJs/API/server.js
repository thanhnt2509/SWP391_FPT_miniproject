const express = require('express');
const cors = require('cors');
require('dotenv').config();
const routes = require('./src/routes/index.routes');
const { handleError } = require('./src/middlewares/errorHandler.mdw');
const { unknownEndpoint } = require('./src/middlewares/unknownEndpoint.mdw');

const app = express();

//Access-Control-Allow-Origin
app.use(cors());
// only to monitor web -> don't need to care about this thing
app.use(logger)
function logger(req, res, next) {
    const currentDate = new Date();
    const utcOffset = 7; // UTC+7
    const offsetDate = new Date(currentDate.getTime() + (utcOffset * 60 * 60 * 1000));

    console.log(`METHOD: ${req.method} | URL: ${req.originalUrl} | TIME: ${offsetDate.toISOString().slice(0, 19).replace('T', ' ')}`);
    next();
}

// allow express to read request body
app.use(express.urlencoded({ extended: true }))

// allow FE send json request and server can parse that json
app.use(express.json())
app.use(routes);
app.use(unknownEndpoint);
app.use(handleError);

port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})