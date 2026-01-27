const { test } = require('@playwright/test');
const DataDrivenTest = require('../pages/dataDrivenTest');

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
      const ddt = new DataDrivenTest(page);
      await ddt.gotoLogin();
      await ddt.login(data.email, data.password);

      if (data.shouldLogin) {
        await ddt.expectLoginSuccess();
      } else {
        await ddt.expectLoginFailure();
      }
    });
  }
});
