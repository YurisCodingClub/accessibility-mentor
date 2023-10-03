import { test, expect } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';

test('should not have any automatically detectable accessibility violations', async ({ page }) => {
  await page.goto('https://accessibilitymentor.tech/');

  const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['best-practice'])
      // implemented best-practice testing tag to avoid most of the accessibility issues
      // other alternatives are present below, uncomment to use
      // .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
