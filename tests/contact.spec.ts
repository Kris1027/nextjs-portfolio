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

  test("check if render the form correctly", async ({ page }) => {
    await expect(page.getByPlaceholder("Your name")).toBeVisible();
    await expect(page.getByPlaceholder("Your email")).toBeVisible();
    await expect(page.getByPlaceholder("Your message")).toBeVisible();
    await expect(page.getByTestId("submit-button")).toBeVisible();
  });

  test("check if show error messages for empty fields", async ({ page }) => {
    await page.locator("#contact").getByRole("button").click();
    await expect(page.getByText("Name is required")).toBeVisible();
    await expect(page.getByText("Email is invalid")).toBeVisible();
    await expect(page.getByText("Message is required")).toBeVisible();
  });

  test("check if email form is sending correct data", async ({ page }) => {
    await page.getByPlaceholder("Your name").fill("Test User");
    await page.getByPlaceholder("Your email").fill("test@example.com");
    await page.getByPlaceholder("Your message").fill("Test message");

    await page.route(
      "https://api.emailjs.com/api/v1.0/email/send",
      async (route) => {
        await route.fulfill({ status: 200 });
      }
    );

    await page.locator("#contact").getByRole("button").click();

    await expect(page.getByText("Email sent successfully!")).toBeVisible();
  });
});
