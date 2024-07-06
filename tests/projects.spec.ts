import { test, expect } from "@playwright/test";

test.describe("Projects", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/#projects");
  });

  test("check if heading, paragraph and list are displayed", async ({
    page,
  }) => {
    const heading = page.getByLabel("projects heading");
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("Projects");

    const description = page.getByLabel("projects description");
    await expect(description).toBeVisible();
    await expect(description).toContainText(
      "Here are some of the projects I've worked on"
    );

    const githubLink = page.getByLabel("projects github link");
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toContainText("More you can find on my");

    const linkInsideParagraph = githubLink.locator("a");
    await expect(linkInsideParagraph).toBeVisible();
    await expect(linkInsideParagraph).toHaveAttribute("href");
    await expect(linkInsideParagraph).toHaveAttribute("href", /github\.com/);

    const list = page.getByTestId("projects list");
    await expect(list).toBeVisible();
  });

  // for later, build tests for project-item
});
