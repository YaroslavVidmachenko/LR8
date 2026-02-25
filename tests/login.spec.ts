import { test, expect } from '@playwright/test';

test.describe('Form Authentication', () => {

    test('Successful login with valid credentials', async ({ page }) => {
        await page.goto('/login');

        await page.fill('#username', 'tomsmith');
        await page.fill('#password', 'SuperSecretPassword!');
        await page.click('button[type="submit"]');

        await expect(page.locator('.flash.success'))
            .toContainText('You logged into a secure area!');
    });

});