var path = require('path')

const dotenv = require('dotenv');
dotenv.config();

const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

// You could call it aylienapi, or anything else
const apiKey = process.env.API_KEY 

console.log(`Your API key is ${process.env.API_KEY}`);
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
