const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 3000;

app.set('view engine', 'hbs');
app.use(express.static('public'));
hbs.registerPartials(__dirname + '/views/partials');

app.use('/talk', (req, res) => {
    res.render('talk.hbs');
});

app.use('/articles', (req, res) => {
    res.render('articles.hbs');
});

app.use('/login', (req, res) => {
    res.render('login.hbs');
});

app.use('/profile', (req, res) => {
    res.render('profile.hbs');
});

app.use('/tests', (req, res) => {
    res.render('tests.hbs');
});

app.use('/lessons', (req, res) => {
    res.render('lessons.hbs');
});

app.use('/', (req, res) => {
   res.render('mainPage.hbs');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});