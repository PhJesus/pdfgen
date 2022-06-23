const express = require('express');
const dados = require('../models/dados');
const viewsRouter = express.Router();

// Renderizando a pagina com EJS
viewsRouter.get('/', (req, res) => {
  res.render('template', {dados})
});

module.exports = viewsRouter;