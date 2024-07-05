import { test, expect } from "@playwright/test";

test("Email form", async ({ page }) => {
  await page.goto("http://localhost:3000/");

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
