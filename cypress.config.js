const { defineConfig } = require('cypress');
const cypressOnFix = require('cypress-on-fix');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const path = require('path');
const { merge } = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');

module.exports = defineConfig({
  projectId: 'koum8r',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Custom Title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    reportDir: 'custom-report'
  },
  video: true,
  retries: {
    runMode: 1, 
    openMode: 1 
  },
  e2e: {
    baseUrl: 'https://cinemark-colombia-dev-staging-gzs859bsx-cinemark-colombia.vercel.app',
    specPattern: 'cypress/e2e/**/*.feature',
    async setupNodeEvents(on, config) {
      on = cypressOnFix(on);

      require(path.resolve('node_modules/cypress-mochawesome-reporter/plugin'))(on);

      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );


      return config;
    },
  },
});