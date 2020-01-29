const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {    
    res.render('response', { name: req.body.name });
});

app.listen(3000, () => console.log('Listening on port 3000!'));