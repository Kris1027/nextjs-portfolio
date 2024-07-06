import { test, expect } from "playwright/test";

test.describe("About", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/#about");
  });

  test("check if title, subtitle and description are displayed", async ({
    page,
  }) => {
    const title = page.getByLabel("title");
    await expect(title).toBeVisible();
    await expect(title).not.toBeEmpty();

    const proffesion = page.getByLabel("proffesion");
    await expect(proffesion).toBeVisible();
    await expect(proffesion).not.toBeEmpty();

    const description = page.getByLabel("description");
    await expect(description).toBeVisible();
    await expect(description).not.toBeEmpty();
  });
});
