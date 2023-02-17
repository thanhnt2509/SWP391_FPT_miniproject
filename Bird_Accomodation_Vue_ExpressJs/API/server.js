const express = require('express');
const cors = require('cors');
require('dotenv').config();
const userRoute = require('./routes/userRoute');
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

// to test purpose only, normally we only need json obj return back
// app.set('view engine', 'ejs')


app.get('/', async (req, res) => {
    res.send('Hello go <a href="/users">here</a> to list all users')
})

app.use('/users', userRoute)

port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})



