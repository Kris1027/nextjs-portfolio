import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("Check if navigation links work", async ({ page }) => {
    await page.getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL("http://localhost:3000/#about");

    await page.getByRole("link", { name: "Skills" }).click();
    await expect(page).toHaveURL("http://localhost:3000/#skills");

    await page.getByRole("link", { name: "Projects" }).click();
    await expect(page).toHaveURL("http://localhost:3000/#projects");

    await page.getByRole("link", { name: "Courses" }).click();
    await expect(page).toHaveURL("http://localhost:3000/#courses");

    await page.getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL("http://localhost:3000/#contact");
  });
});
