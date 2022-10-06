const express = require('express');
const path = require('path');
const formidable = require('formidable');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', `login.html`));
});

app.post('/', (req, res) => {
    const form = formidable({
        multiples: true,
        uploadDir: path.join(__dirname, 'load'),
        keepExtensions: true,
        filename: (name, ext) => name + ext,
    });
    form.parse(req);
    res.redirect('/');
});

app.listen(8000, () => {
    console.log('Hello world!)')
});