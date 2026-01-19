const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login_pom');
const HomePage = require('../pages/homepage_pom');

test.describe('Data-driven login examples', () => {
  const testData = [
    {
      title: 'valid credentials',
      email: process.env.PW_EMAIL || 'shyaam3126@gmail.com',
      password: process.env.PW_PASSWORD || 'Shyambala123',
      shouldLogin: true,
    },
    {
      title: 'invalid password',
      email: process.env.PW_EMAIL || 'shyaam3126@gmail.com',
      password: 'wrong-password',
      shouldLogin: false,
    },
    {
      title: 'invalid email',
      email: 'invalid-email@example.com',
      password: process.env.PW_PASSWORD || 'Shyambala123',
      shouldLogin: false,
    },
  ];

  for (const data of testData) {
    test(`Login (DDT): ${data.title}`, async ({ page }) => {
      await page.goto('https://freelance-learn-automation.vercel.app/login');

      const loginPage = new LoginPage(page);
      await loginPage.login(data.email, data.password);

      const homePage = new HomePage(page);

      if (data.shouldLogin) {
        await expect(page.locator(homePage.menu)).toBeVisible();
      } else {
        await expect(page.locator(loginPage.signInButton)).toBeVisible();
        await expect(page.locator(homePage.menu)).toHaveCount(0);
      }
    });
  }
});
