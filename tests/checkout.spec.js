import { test, expect } from '../fixtures/baseTest.js';
import { productData } from '../test-data/productData.js';

test('user can complete checkout successfully', async ({
  authenticatedDashboardPage,
  cartPage,
  checkoutPage,
  orderConfirmationPage,
  ordersPage
}) => {

  const productName = productData.zaraCoat;
  const countryName = 'United States';

  await authenticatedDashboardPage.addProductToCart(productName);
  await authenticatedDashboardPage.goToCart();

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