// Imports
const express = require('express');
const path = require('path');
const puppeteer = require('puppeteer');

const app = express();

// Arquivos estáticos
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));

// Dados p/ teste
const dados = [
    {
        "id": 0,
        "firstname": "Jenda",
        "lastname": "Jary",
        "country": "Mayotte",
        "email": "Jenda.Jary@gmail.com"
    }, 
    {
        "id": 1,
        "firstname": "Agathe",
        "lastname": "Kaete",
        "country": "Egypt",
        "email": "Agathe.Kaete@gmail.com"
    },
    {
        "id": 2,
        "firstname": "Betta",
        "lastname": "Ashely",
        "country": "Angola",
        "email": "Betta.Ashely@gmail.com"
    },
    {
        "id": 3,
        "firstname": "Amara",
        "lastname": "Harned",
        "country": "Tokelau",
        "email": "Amara.Harned@gmail.com"
    },
    {
        "id": 4,
        "firstname": "Hyacinthe",
        "lastname": "Phi",
        "country": "Mauritania",
        "email": "Hyacinthe.Phi@gmail.com"
    },
    {
        "id": 5,
        "firstname": "Sam",
        "lastname": "Sheng",
        "country": "Monaco",
        "email": "Sam.Sheng@gmail.com"
    },
    {
        "id": 6,
        "firstname": "Siana",
        "lastname": "Meter",
        "country": "Suriname",
        "email": "Siana.Meter@gmail.com"
    },
    {
        "id": 7,
        "firstname": "Trixi",
        "lastname": "Aida",
        "country": "Gabon",
        "email": "Trixi.Aida@gmail.com"
    },
    {
        "id": 8,
        "firstname": "Tina",
        "lastname": "Thornburg",
        "country": "Wallis and Futuna",
        "email": "Tina.Thornburg@gmail.com"
    },
    {
        "id": 9,
        "firstname": "Karina",
        "lastname": "Jacinda",
        "country": "Malaysia",
        "email": "Karina.Jacinda@gmail.com"
    }
]

// Setando o EJS como view engine
app.set('view engine', 'ejs');

console.log(path.join(__dirname, 'views', 'template.ejs'))

// Configurando o Puppeteer para gerar o pdf
app.get('/pdf', async (req, res) => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://localhost:3000/', {
        waitUntil : 'networkidle0'
    });

    const pdf = await page.pdf({
        printBackground : true,
        format : 'a4'
    });

    await browser.close();

    res.contentType('application/pdf')

    return res.send(pdf);
})

// Renderizando a pagina com EJS
app.get('/', (req, res) => {
    res.render('template', {dados})
})

app.listen(3000 , () => console.log(`App rodando em http://localhost:3000`));