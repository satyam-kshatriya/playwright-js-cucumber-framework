const { Before, After, setDefaultTimeout } = require("@cucumber/cucumber");

const { launchBrowser, closeBrowser } = require("./browserManager");

setDefaultTimeout(60000);

Before(async function () {
  this.page = await launchBrowser();
});

After(async function (scenario) {
  if (scenario.result.status === "FAILED") {
    await this.page.screenshot({
      path: `reports/screenshots/${scenario.pickle.name}.png`,
      fullPage: true,
    });

    console.log("Screenshot Captured");
  }

  await closeBrowser();
});
