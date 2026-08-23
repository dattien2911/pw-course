import { test, expect } from '@playwright/test';

test('Bài học 1: Register Page', async ({ page }) => {
    await test.step("Step 1", async() => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator("//a[text() = 'Bài học 1: Register Page (có đủ các element)']").click()
        await page.locator("#username").fill("dattien2911")
        await page.locator("#email").fill("dattien2911@gmail.com")
        await page.locator("#male").check()
        await page.locator("#traveling").check()
        await page.locator("#interests").selectOption("technology")
        await page.locator("#country").selectOption("australia")
        await page.locator("#dob").fill("2001-11-29")
        await page.locator("#profile").setInputFiles("tests/data-test/nick.jpg")
        await page.locator("#bio").fill("Hello, i am an automation engineer")
    })
     await test.step("Step 2", async() => {
        await page.locator("//button[text() = 'Register']").click()
        await page.waitForTimeout(5000)
    })
});