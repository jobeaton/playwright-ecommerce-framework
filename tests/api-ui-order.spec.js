import { test, expect, request } from "@playwright/test";

import { ApiUtils } from "../utils/ApiUtils.js";

import { LoginPage } from "../pages/LoginPage.js";
import { OrdersPage } from "../pages/OrdersPage.js";
import { userData } from "../test-data/userData.js";

test("user can create order via API and verify it in UI", async ({ page }) => {
  const loginPayload = {
    userEmail: process.env.TEST_EMAIL,
    userPassword: process.env.TEST_PASSWORD,
  };

  const orderPayload = {
    orders: [
      {
        country: "United States",
        productOrderedId: "6960eac0c941646b7a8b3e68",
      },
    ],
  };

  const apiContext = await request.newContext();

  const apiUtils = new ApiUtils(apiContext, loginPayload);

  const response = await apiUtils.createOrder(orderPayload);

  const orderId = response.orders[0];

  expect(response.message).toContain("Order Placed Successfully");
  expect(orderId).toBeTruthy();

  const loginPage = new LoginPage(page);
  const ordersPage = new OrdersPage(page);

  await loginPage.goTo();

  await loginPage.login(userData.validUser.email, userData.validUser.password);

  await ordersPage.goToOrders();

  const orderExists = await ordersPage.verifyOrderExists(orderId);

  expect(orderExists).toBeTruthy();
});
