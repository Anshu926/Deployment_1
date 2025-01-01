const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req, res) => {
    res.render('home.ejs');
});

app.listen(2005, () => {
    console.log('Server is Listening on port 2005');
});   