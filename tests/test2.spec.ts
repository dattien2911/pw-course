import { test, expect } from '@playwright/test';

test('Bài học 2: Product page', async ({ page }) => {
    await test.step("Step 1", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator("//a[text() = 'Bài học 2: Product page']").click()
        
        await page.locator("//div[div[text() = 'Product 1']]/button").dblclick()
        // await page.locator("//button[@data-product-id = 1]'").dblclick()

        await page.locator("//div[div[text() = 'Product 2']]/button").click({clickCount: 3})
        // await page.locator("//button[@data-product-id = 2]'").click({clickCount: 3})

        await page.locator("//div[div[text() = 'Product 3']]/button").click()
        // await page.locator("//button[@data-product-id = 3]'").click()

        const product1Quantity = page.locator("//tbody/tr[td[text() = 'Product 1']]/td[3]")
        const product2Quantity = page.locator("//tbody/tr[td[text() = 'Product 2']]/td[3]")
        const product3Quantity = page.locator("//tbody/tr[td[text() = 'Product 3']]/td[3]")

        //verify
        await expect(product1Quantity).toHaveText("2")
        await expect(product2Quantity).toHaveText("3")
        await expect(product3Quantity).toHaveText("1")
    })
});