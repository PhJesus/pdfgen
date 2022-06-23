// Imports
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const viewsRouter = require('./routes/views_router');
const pdfRouter = require('./routes/pdf_router');

const app = express();

// Arquivos estáticos
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));

// Setando o EJS como view engine
app.use(expressLayouts)
app.set('view engine', 'hbs');

app.use('/view', viewsRouter);
app.use('/pdf', pdfRouter);

app.get('/', (req, res) => {
    res.render('msg');
});

app.listen(3000 , () => console.log('App rodando em http://localhost:3000'));