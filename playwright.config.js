// playwright.config.js
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  use: {
    headless: false,
    viewport: { width: 1920, height: 1080 },
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
  },
  // ...existing code...
reporter: [
  ['allure-playwright']
],
// ...existing code...
};

module.exports = config;
