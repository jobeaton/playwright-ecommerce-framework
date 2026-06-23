import { test, expect } from "../fixtures/baseTest.js";

test("user sees mocked empty order history message", async ({
  authenticatedDashboardPage,
  ordersPage,
  page,
}) => {
  await page.route(
    "**/api/ecom/order/get-orders-for-customer/*",
    async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          data: [],
          message: "No Orders",
        }),
      });
    },
  );

  await ordersPage.goToOrders();

  await expect(page.getByText("No Orders")).toBeVisible();
});

test("orders page remains stuck loading when order service returns 500", async ({
  authenticatedDashboardPage,
  ordersPage,
  page,
}) => {
  await page.route(
    "**/api/ecom/order/get-orders-for-customer/*",
    async (route) => {
      await route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({
          message: "Internal Server Error",
        }),
      });
    },
  );

  await ordersPage.goToOrders();

  await expect(page.getByText("Loading....")).toBeVisible();
});
