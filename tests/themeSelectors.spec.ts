import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.getByLabel("Light mode").click();
  await expect(page.locator("html")).toHaveClass("light");
  await expect(page.locator("html")).not.toHaveClass("dark");

  await page.getByLabel("Dark mode").click();
  await expect(page.locator("html")).toHaveClass("dark");
  await expect(page.locator("html")).not.toHaveClass("light");

  await page.getByLabel("System mode").click();
  await expect(page.locator("html")).toHaveClass(/light|dark/);
});
