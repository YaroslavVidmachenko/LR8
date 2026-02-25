import { test, expect } from '@playwright/test';

test.describe('Dynamic Loading', () => {

    test('Load dynamic content', async ({ page }) => {
        await page.goto('/dynamic_loading/2');

        await page.click('button');

        await expect(page.locator('#finish'))
            .toHaveText('Hello World!');
    });

});