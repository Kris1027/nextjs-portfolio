import { test, expect } from "@playwright/test";

test.describe("Skills", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/#skills");
  });

  test("check if heading, paragraph and list are displayed", async ({
    page,
  }) => {
    const heading = page.getByLabel("skills heading");
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("Known technologies");
  });
});
