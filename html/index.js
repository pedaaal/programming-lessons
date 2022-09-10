const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const PORT = 3000;
const ROOT = path.join(__dirname);

const app = express();

app.use('/static', express.static(path.join(ROOT, 'static')));

app.get('/', (req, res, next) => {
    console.log(req.ip);
    fs.readFile(path.join(ROOT, 'index,html'))
    .then(content => {
        const name = 'Bob';
        content = content.toString().replace('{name}', name);
        res.send(content);
    })
    .catch(e => next());
});

app.get('*', (req, res) => {
    res.send('404 not found');
})

app.listen(PORT, () => console.log('Server is running...'));