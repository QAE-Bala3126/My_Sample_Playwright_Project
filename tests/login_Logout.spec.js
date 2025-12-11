// example.spec.js
const { test, expect } =require('@playwright/test');
const LoginPage = require("../pages/login_pom")
const HomePage = require("../pages/homepage_pom")

test('Logout of Application', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  const loginPage = new LoginPage(page);
  await loginPage.loginToApplication();

  const homePage = new HomePage(page);
  await homePage.logoutOfApplication();
});
