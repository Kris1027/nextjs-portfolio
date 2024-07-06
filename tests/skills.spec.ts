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

    const description = page.getByLabel("skills description");
    await expect(description).toBeVisible();
    await expect(description).toContainText(
      "Here are some of the technologies I have used"
    );

    const list = page.getByTestId("skills list");
    await expect(list).toBeVisible();
  });
});
