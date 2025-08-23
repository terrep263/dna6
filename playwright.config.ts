import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'tests/e2e',
  retries: 1,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:5173',
    headless: true,
    trace: 'on-first-retry',
  },
})


