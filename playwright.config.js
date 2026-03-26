const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '.',
  timeout: 120000,
  retries: 1,
  workers: 1,
  reporter: [['list'], ['html', { outputFolder: 'test-report', open: 'never' }]],
  use: {
    headless: true,
    baseURL: 'https://cloud.blackbox.ai',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    navigationTimeout: 60000,
    actionTimeout: 30000,
  },
});
