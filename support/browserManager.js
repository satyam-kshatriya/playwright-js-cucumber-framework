require("dotenv").config();
const { chromium } = require("playwright");

let browser;
let context;
let page;

async function launchBrowser() {
  browser = await chromium.launch({
    // Local = Browser visible
    // GitHub Actions (CI=true) = Headless
    headless: process.env.CI === "true",
  });

  context = await browser.newContext();
  page = await context.newPage();

  return page;
}

async function closeBrowser() {
  if (browser) {
    await browser.close();
  }
}

module.exports = {
  launchBrowser,
  closeBrowser,
};
