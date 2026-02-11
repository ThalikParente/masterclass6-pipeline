const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationpratice.com.br/",
    setupNodeEvents(on, config) {
      // implementar node event listeners aqui, se necessário
    },
  },
});
