import { test, expect } from '@playwright/test';

test.describe('Dropdown', () => {

    test('Select option from dropdown', async ({ page }) => {
        await page.goto('/dropdown');

        await page.selectOption('#dropdown', '2');

        await expect(page.locator('#dropdown')).toHaveValue('2');
    });

});