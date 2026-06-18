import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';
import { OrderConfirmationPage } from '../pages/OrderConfirmationPage.js';

import { userData } from '../test-data/userData.js';
import { productData } from '../test-data/productData.js';
import { OrdersPage } from '../pages/OrdersPage.js';

test('user can complete checkout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const orderConfirmationPage = new OrderConfirmationPage(page);
  const ordersPage = new OrdersPage(page);

  const productName = productData.zaraCoat;
  const countryName = 'United States';

  await loginPage.goTo();

  await loginPage.login(
    userData.validUser.email,
    userData.validUser.password
  );

  await dashboardPage.expectDashboardLoaded();

  await dashboardPage.addProductToCart(productName);

  await dashboardPage.goToCart();

  const productExists = await cartPage.verifyProductInCart(productName);

  expect(productExists).toBeTruthy();

  await cartPage.goToCheckout();

  await checkoutPage.selectCountry('uni', countryName);

  await checkoutPage.placeOrder();

  const confirmationMessage =
    await orderConfirmationPage.getConfirmationMessage();

  expect(confirmationMessage.trim()).toContain('Thankyou for the order.');

  const orderId = await orderConfirmationPage.getOrderId();

  expect(orderId.length).toBeGreaterThan(0);

  await ordersPage.goToOrders();

  const orderExists =
    await ordersPage.verifyOrderExists(orderId);

  expect(orderExists).toBeTruthy();
});