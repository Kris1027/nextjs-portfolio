import { test, expect } from "@playwright/test";

test.describe("Contact", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/#courses");
  });

  test("check if heading and paragraph are displayed", async ({ page }) => {
    const heading = page.getByLabel("contact heading");
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("Contact");

    const description = page.getByLabel("contact description");
    await expect(description).toBeVisible();
    await expect(description).toContainText(
      "Feel free to get in touch with me"
    );
  });
});
