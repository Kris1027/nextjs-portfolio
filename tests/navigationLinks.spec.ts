import { test, expect } from "@playwright/test";

test("Navigation links", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.getByLabel("About").click();
  await expect(page).toHaveURL("http://localhost:3000/#about");

  await page.getByLabel("Skills").click();
  await expect(page).toHaveURL("http://localhost:3000/#skills");

  await page.getByLabel("Projects").click();
  await expect(page).toHaveURL("http://localhost:3000/#projects");

  await page.getByLabel("Courses").click();
  await expect(page).toHaveURL("http://localhost:3000/#courses");

  await page.getByLabel("Contact").click();
  await expect(page).toHaveURL("http://localhost:3000/#contact");
});
