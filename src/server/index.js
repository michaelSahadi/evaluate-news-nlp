var path = require('path')
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config();

const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(cors())

app.use(express.json())

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.use(express.static(path.resolve(__dirname, '../../dist')))

console.log('dirname', __dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../../dist/index.html'))
})

app.post('/test', async(req, res) => {

    console.log(process.env.API_KEY);
    console.log('req.body', req.body);

    const { formText } = req.body;
    
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${formText}&lang=en` 

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(response => response.json())
        .then(result => {
            res.send(result)
        })
        .catch(err => res.status(500).send(err))
})

