import { test, expect } from '@playwright/test';

test.describe('Checkboxes', () => {

    test('Check and uncheck checkbox', async ({ page }) => {
        await page.goto('/checkboxes');

        const checkbox = page.locator('input[type="checkbox"]').first();

        await checkbox.check();
        await expect(checkbox).toBeChecked();

        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    });

});