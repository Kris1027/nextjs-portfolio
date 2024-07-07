import { test, expect } from "@playwright/test";

test.describe("Contact", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/#contact");
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

  test("check if email form is sending correct data", async ({ page }) => {
    await page.getByPlaceholder("Your name").fill("Test Name");
    await page.getByPlaceholder("Your email").fill("test@email.com");
    await page.getByPlaceholder("Your message").fill("Test message");

    await expect(page.getByPlaceholder("Your name")).toHaveValue("Test Name");
    await expect(page.getByPlaceholder("Your email")).toHaveValue(
      "test@email.com"
    );
    await expect(page.getByPlaceholder("Your message")).toHaveValue(
      "Test message"
    );

    const submitPromise = page.waitForResponse(
      (response) =>
        response.url().includes("emailjs") && response.status() === 200
    );
    await page.locator("#contact").getByRole("button").click();

    const response = await submitPromise;

    expect(response.ok()).toBeTruthy();
  });
});
