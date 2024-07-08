import { test, expect } from "@playwright/test";

test.describe("Courses", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/#courses");
  });

  test("check if heading, paragraph and list are displayed", async ({
    page,
  }) => {
    const heading = page.getByLabel("courses heading");
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("Courses");

    const description = page.getByLabel("courses description");
    await expect(description).toBeVisible();
    await expect(description).toContainText(
      "The most important courses I have completed"
    );

    const list = page.getByTestId("courses list");
    await expect(list).toBeVisible();
  });

  // for later, build tests for course-item
});
