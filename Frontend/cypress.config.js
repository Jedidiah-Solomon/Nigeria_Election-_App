import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    watchForFileChanges: true,

    // Set default viewport size - without setting Cypress uses 1000px x 660px (width x height)
    viewportWidth: 1280,
    viewportHeight: 720,

    // Set the folder where static files are served from
    fileServerFolder: ".",

    // Set a base URL to avoid repeating URL - using your local server
    baseUrl: "http://127.0.0.1:5000",

    // Enable video recording and set the folder to save videos
    video: true,
    videosFolder: "cypress/videos",

    setupNodeEvents(on, config) {
      // Implement node event listeners here if needed
    },
  },

  // Default Command Timeout settings overridden for component tests
  component: {
    defaultCommandTimeout: 6000,
  },
});
