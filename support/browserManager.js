require("dotenv").config();
const { chromium } = require("playwright");

let browser;
let context;
let page;

async function launchBrowser() {
  browser = await chromium.launch({
    headless: false,
  });

  context = await browser.newContext();

  page = await context.newPage();

  return page;
}

async function closeBrowser() {
  await browser.close();
}

module.exports = {
  launchBrowser,
  closeBrowser,
};
