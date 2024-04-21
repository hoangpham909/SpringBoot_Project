import { defineConfig } from "cypress";

const config = defineConfig({
  env: {
    apiUrl: 'http://localhost:8080',
  },
  e2e: {
    baseUrl: 'http://localhost:8080',
    setupNodeEvents(on, config) {},
    supportFile: false,
  }
});
export default config;
