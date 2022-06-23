const express = require('express');
const pdfController = require('../controllers/pageFunctions');

const pdfRouter = express.Router();

pdfRouter.get('/', pdfController.getPagePDF);

module.exports = pdfRouter;