import { test, expect } from "@playwright/test";

test("Theme selectors", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  async function checkLocalStorage(expectedTheme: string) {
    const theme = await page.evaluate(() => localStorage.getItem("theme"));
    expect(theme).toBe(expectedTheme);
  }

  await page.getByLabel("Light mode").click();
  await expect(page.locator("html")).toHaveClass("light");
  await expect(page.locator("html")).not.toHaveClass("dark");
  await checkLocalStorage("light");

  await page.getByLabel("Dark mode").click();
  await expect(page.locator("html")).toHaveClass("dark");
  await expect(page.locator("html")).not.toHaveClass("light");
  await checkLocalStorage("dark");

  await page.getByLabel("System mode").click();
  await expect(page.locator("html")).toHaveClass(/light|dark/);
  await checkLocalStorage("system");
});
