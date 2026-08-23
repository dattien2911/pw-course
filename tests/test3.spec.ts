import { test, expect } from '@playwright/test';

test('Bài học 3: Todo page', async ({ page }) => {
    await test.step("Step 1", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator("//a[text() = 'Bài học 3: Todo page']").click()

        for (let i = 1; i <= 100; i++) {
            await page.locator("#new-task").fill(`Todo ${i}`)
            await page.locator("#add-task").click()
        }
        const tasks = page.locator("//ul[@id = 'task-list']/li")
        await expect(tasks).toHaveCount(100)
    })
    await test.step("Step 2", async () => {
        for (let i = 1; i <= 100; i += 2) {
            page.once('dialog', async dialog => {
                console.log(dialog.message());
                await dialog.accept();
            });
            await page.locator(`#todo-${i}-delete`).click();
        }
        const tasks = page.locator("//ul[@id = 'task-list']/li")
        await expect(tasks).toHaveCount(50)
        await page.waitForTimeout(5000)
    })
});