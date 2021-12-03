const fs = require('fs/promises');

// fs.readFile('hello.txt', 'utf-8', (err, data) => {
// console.log('reading file');
// console.log(data);
// });

let  res;

fs.readFile('hello.txt', 'utf-8')
.then(data => (data.split(',').map(el => el * 2)))
.then((dataArray) => {
    fs.appendFile('hello.txt', ` ${dataArray} `)
})
