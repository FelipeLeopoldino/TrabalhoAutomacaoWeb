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
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
      charts: true,
      reportPageTitle: "Relatório dos testes Cypress",
      embeddedScreenshots: true,
      inlineAssets: true,
    },
  },
});
