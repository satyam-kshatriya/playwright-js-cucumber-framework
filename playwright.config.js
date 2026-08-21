// @ts-check
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  workers: 2,

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  reporter: "html",

  use: {
    trace: "on",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  projects: [
    {
      name: "chromium",
      testMatch: /.*\.spec\.js/,
      testIgnore: /.*api.*\.spec\.js/,
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      testMatch: /.*\.spec\.js/,
      testIgnore: /.*api.*\.spec\.js/,
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      testMatch: /.*\.spec\.js/,
      testIgnore: /.*api.*\.spec\.js/,
      use: { ...devices["Desktop Safari"] },
    },

    {
      name: "api",
      testMatch: /.*api.*\.spec\.js/,
    },
  ],
});
