const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  retries: {
    runMode: 2,
    openMode: 2,
  },
  e2e: {
    baseUrl: "https://automationexercise.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
