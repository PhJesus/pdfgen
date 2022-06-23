const puppeteer = require('puppeteer');

async function getPagePDF(req, res) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000/view', {
      waitUntil : 'networkidle0'
  });

  const pdf = await page.pdf({
      printBackground : true,
      format : 'a4'
  });

  await browser.close();

  res.contentType('application/pdf');

  res.send(pdf);
}

module.exports = {
  getPagePDF,
};