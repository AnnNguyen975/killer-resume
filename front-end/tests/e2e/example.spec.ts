import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle("Vite + React + TS");
});


test('check h1 and h3 content', async ({ page }) => {
  // Navigate to your React app
  await page.goto('/');

  // Check the content of the h1 tag
  const h1 = page.locator('h1');
  await expect(h1).toHaveText('My React App - Development');

  // Check the content of the h3 tag
  const h3 = page.locator('h3');
  await expect(h3).toHaveText('Hello Ann');
});
