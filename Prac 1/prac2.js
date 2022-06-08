const fs = require('fs');
const axios = require('axios');
const http = require("http");
const requestListener = function (req, res) {};
const server = http.createServer(requestListener);

new Promise((resolve, reject) =>
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
        const json = JSON.stringify(res.data); 
        fs.writeFile('todos.json', json, (err) => {
            if (err) return reject(err);

            resolve();
        })
    })  
    .catch(reject)
)
.then(() => {
    const port = 3000;
    
    server.listen(port, host, () => {
        console.log(`Server is running on https://jsonplaceholder.typicode.com/todos`);
    });
    fs.readFile('todos.json', function(err,data)
    {
        console.log('Асинхронное чтение файла'); 
        if(err) throw err; // если возникла ошибка 
        console.log(data); // выводим считанные данные
    });
})
.catch(e => console.error(e));