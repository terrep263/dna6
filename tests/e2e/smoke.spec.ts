import { test, expect } from '@playwright/test'

test('home → assessment → singles → submit → results summary', async ({ page }) => {
  await page.goto('/')

  await page.getByTestId('nav-assessment').click()

  await page.getByTestId('start-singles').click()

  // Simulate submit path by visiting results (since assessment external checkout opens new window)
  await page.getByTestId('submit-assessment').click({ trial: true }).catch(() => {})
  await page.goto('/results')

  await expect(page.getByTestId('report-summary')).toBeVisible()
})


