console.log("Login Steps Loaded...");
require("dotenv").config();
// const loginData = require("../test-data/loginData.json");

const { Given, When, Then } = require("@cucumber/cucumber");

const LoginPage = require("../pageobjects/LoginPage1");

const assert = require("assert");

Given("User opens login page", async function () {
  console.log("Step 1 - Inside Given");
  this.loginPage = new LoginPage(this.page);
  console.log("Step 2 - LoginPage object created");
  await this.loginPage.openLoginPage();
  console.log("Step 3 - Login page opened");
});

// When("User enters username and password", async function () {
//   console.log("Username:", loginData.validUser.username);
//   console.log("Password:", loginData.validUser.password);

//   await this.loginPage.enterUsername(loginData.validUser.username);

//   await this.loginPage.enterPassword(loginData.validUser.password);
// });

When(
  "User enters username {string} and password {string}",
  async function (username, password) {
    console.log("Username:", username);
    console.log("Password:", password);

    await this.loginPage.enterUsername(username);
    await this.loginPage.enterPassword(password);
  },
);

When("User clicks Login button", async function () {
  await this.loginPage.clickLogin();
});

// Then("User should be logged in successfully", async function () {
//   await this.page.waitForURL("**/logged-in-successfully/");

//   assert.strictEqual(this.page.url().includes("logged-in-successfully"), true);
// });

Then(
  "User should see {string} with message {string}",
  async function (result, message) {
    if (result === "success") {
      await this.page.waitForURL("**/logged-in-successfully/");

      assert.strictEqual(
        this.page.url().includes("logged-in-successfully"),
        true,
      );

      console.log("✅ Login Successful");
    } else {
      const errorMessage = await this.page.locator("#error").textContent();

      console.log("Actual:", errorMessage);

      assert.strictEqual(errorMessage.includes(message), true);

      console.log("✅ Invalid Login Verified");
    }
  },
);
