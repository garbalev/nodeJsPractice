const User = require('./greeting');
let os = require('os')
const http = require('http');
const fs = require('fs/promises')



http.createServer((request, response) => {
    
    const path = request.url.slice(1);
    console.log(path);
    fs.readFile(path).then(data => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.end(data)});
    
    // response.write('<h1>It is h1</h1>')
    // response.end('NodeeBebrocxco');
}).listen(3770, '127.0.0.1', () => {
    console.log('proslushivanie started');
})

// console.log(`дата запроса: ${greeting.date}`);
// console.log(greeting.getLog(os.userInfo().username));

// const Alex = new User(os.userInfo().username);
// console.log(Alex.date);
// global.name = 'lexx'
// console.log(Alex.getLog());
// Alex.showTerminalArgs();