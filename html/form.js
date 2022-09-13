const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const PORT = 8080;
const HOST = 'localhost';
const ROOT = path.join(__dirname);

const app = express();

app.use(express.urlencoded({extended: false}));
app.use('/Forms', express.static(path.join(ROOT, 'Forms')));
app.get("/:id",(req,res) =>{
    let {id}=req.params;
    console.log(id);
    res.sendFile(path.join(ROOT,'Forms', `${id}.html`));
});

app.post("/Forms", function (req,res) {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.send(`${req.body.login} - ${req.body.password}`);
});
//Users/darya_pv/Prac 1/programming-lessons/html/Формы практика/form1.html
app.get('*', (req, res) => {
    res.send('404 not found');
});

app.listen(PORT, () => console.log(`Server is running on http://${HOST}:${PORT}`));