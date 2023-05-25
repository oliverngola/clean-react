const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    fixturesFolder: 'tests/e2e/cypress/fixtures',
    supportFile: 'tests/e2e/cypress/support/e2e.ts',
    specPattern: 'tests/e2e/cypress/integration/**/*.spec.ts'
  }
})
