// playwright.config.js
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  workers: 3,
  use: {
    headless: false,
    viewport: { width: 1920, height: 1080 },
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'my-report', open: 'on-failure' }],
    ['json', { outputFile: 'test-results.json' }],
    ['allure-playwright'],
  ],
};

module.exports = config;
