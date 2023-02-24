const express = require('express');
const cors = require('cors');
require('dotenv').config();
const routes = require('./src/routes/index.routes');
const app = express();


//Access-Control-Allow-Origin
app.use(cors());

// only to monitor web -> don't need to care about this thing
app.use(logger)
function logger(req, res, next){
    console.log(`URL: ${req.originalUrl} | METHOD: ${req.method} | TIME: ${new Date().toISOString()}`);
    next()
}

// allow express to read request body
app.use(express.urlencoded({extended: true}))

// allow FE send json request and server can parse that json
app.use(express.json())
app.use(routes);


port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})



