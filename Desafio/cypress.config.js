const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rczeu6',
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});