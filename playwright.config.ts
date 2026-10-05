import { defineConfig, devices } from '@playwright/test';

const isCI = Boolean(
  (globalThis as { process?: { env?: { CI?: string } } }).process?.env?.CI,
);

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,
  reporter: 'html',
  
  /* Global settings for all tests */
  use: {
    trace: 'on-first-retry',
    // DO NOT put channel: 'chrome' here
    screenshot: 'only-on-failure',
  },
  // autometic screenshot on failure
    //detailed screenshot on options in config file
    


  /* Configure projects */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        channel: 'chrome', // This safely forces ONLY Chromium to use your Mac's Google Chrome app
      },
    },
    
    // Firefox and WebKit are removed here to prevent errors on your Mac 13 setup
  ],
});
