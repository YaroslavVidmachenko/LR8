import { test, expect } from '@playwright/test';

test.describe('JavaScript Alerts', () => {

    test('Accept JS alert', async ({ page }) => {
        await page.goto('/javascript_alerts');

        page.once('dialog', async dialog => {
            await dialog.accept();
        });

        await page.click('text=Click for JS Alert');

        await expect(page.locator('#result'))
            .toContainText('You successfully clicked an alert');
    });

});