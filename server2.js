

const express = require('express');
const nodemon = require('nodemon');

const app = express();

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// })

app.get('/(:arg)?', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    // response.send(`$arg- ${request.params.arg}`);
    if (request.params.arg === '1') {
        response.send('1')
    } else {
        response.send('++++++++');
    }
}).listen(3046, () => console.log('started'));