const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const PORT = 3000;
const HOST = 'localhost';
const ROOT = path.join(__dirname);

const app = express();

app.use('/static', express.static('static'));

app.get("/:id",(req,res) =>{
    let {id}=req.params;
    console.log(id);
    res.sendFile(path.join(ROOT,'файлы', `${id}.html`));
});

app.get('*', (req, res) => {
    res.send('404 not found');
});

app.listen(PORT, () => console.log(`Server is running on http://${HOST}:${PORT}`));