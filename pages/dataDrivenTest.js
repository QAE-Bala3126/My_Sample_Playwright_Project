const { expect } = require('@playwright/test');
const LoginPage = require('./login_pom');
const HomePage = require('./homepage_pom');

class DataDrivenTest {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.homePage = new HomePage(page);
    this.loginUrl = 'https://freelance-learn-automation.vercel.app/login';

    this.loginErrorHeading = page.getByRole('heading', {
      level: 2,
      name: /^error\b/i,
    });
  }

  async gotoLogin() {
    await this.page.goto(this.loginUrl);
  }

  async login(email, password) {
    await this.loginPage.login(email, password);
  }

  async expectLoginSuccess() {
    await expect(this.page).not.toHaveURL(/\/login(\b|\/|\?|#|$)/i);
    await expect(this.loginErrorHeading).toHaveCount(0);
  }

  async expectLoginFailure() {
    await expect(this.page).toHaveURL(/\/login(\b|\/|\?|#|$)/i);
    await expect(this.page.locator(this.loginPage.signInButton)).toBeVisible();
    await expect(this.loginErrorHeading).toBeVisible();
  }
}

module.exports = DataDrivenTest;
