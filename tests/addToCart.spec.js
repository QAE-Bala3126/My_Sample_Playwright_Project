const { test, expect } =require('@playwright/test');
const LoginPage = require("../pages/login_pom")
const AddToCart = require("../pages/addToCart_pom")

test('Login to Application', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  const loginPage = new LoginPage(page);
  await loginPage.loginToApplication();

  const addtocart = new AddToCart(page);
  await addtocart.addToCartOfApplication();
  await addtocart.confirmAddToCart();
});