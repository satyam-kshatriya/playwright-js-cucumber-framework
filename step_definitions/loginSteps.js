console.log("Login Steps Loaded...");
require("dotenv").config();
const loginData = require("../test-data/loginData.json");

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

When("User enters username and password", async function () {
  console.log("Username:", loginData.validUser.username);
  console.log("Password:", loginData.validUser.password);

  await this.loginPage.enterUsername(loginData.validUser.username);

  await this.loginPage.enterPassword(loginData.validUser.password);
});

When("User clicks Login button", async function () {
  await this.loginPage.clickLogin();
});

Then("User should be logged in successfully", async function () {
  await this.page.waitForURL("**/logged-in-successfully/");

  assert.strictEqual(this.page.url().includes("logged-in-successfully"), true);
});
