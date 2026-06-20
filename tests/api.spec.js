import { test, expect, request } from "@playwright/test";
import { ApiUtils } from "../utils/ApiUtils.js";

test("user can create order via API", async () => {
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

  console.log("ORDER ID:", orderId);

  console.log(response);

  expect(response.message)
  .toContain('Order Placed Successfully');
});
