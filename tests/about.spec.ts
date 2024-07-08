import { test, expect } from "playwright/test";

test.describe("About", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/#about");
  });

  test("check if title, subtitle and description are displayed", async ({
    page,
  }) => {
    const title = page.getByLabel("about title");
    await expect(title).toBeVisible();
    await expect(title).not.toBeEmpty();

    const proffesion = page.getByLabel("about proffesion");
    await expect(proffesion).toBeVisible();
    await expect(proffesion).not.toBeEmpty();

    const description = page.getByLabel("about description");
    await expect(description).toBeVisible();
    await expect(description).not.toBeEmpty();
  });

  // for later, build tests for socials

  test("check if render profile image correctly", async ({ page }) => {
    const imageContainer = page.getByTestId("image container");
    await expect(imageContainer).toBeVisible();

    const image = page.getByLabel("profile image");
    await expect(image).toHaveAttribute("src", /profile\.jpeg/);
    await expect(image).toHaveAttribute("width", "640");
    await expect(image).toHaveAttribute("height", "640");
    await expect(image).toBeVisible();
  });
});
