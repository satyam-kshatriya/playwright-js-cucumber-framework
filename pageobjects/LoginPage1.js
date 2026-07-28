class LoginPage {
  constructor(page) {
    this.page = page;

    this.username = "#username";
    this.password = "#password";
    this.submit = "#submit";
  }

  async openLoginPage() {
    await this.page.goto(process.env.BASE_URL);
  }

  async enterUsername(username) {
    await this.page.fill(this.username, username);
  }

  async enterPassword(password) {
    await this.page.fill(this.password, password);
  }

  async clickLogin() {
    await this.page.click(this.submit);
  }
}

module.exports = LoginPage;
