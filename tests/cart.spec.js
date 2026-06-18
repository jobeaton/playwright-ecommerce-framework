import { test, expect } from '../fixtures/baseTest.js';
import { productData } from '../test-data/productData.js';

test('user can add product to cart', async ({
  authenticatedDashboardPage,
  cartPage
}) => {
  const productName = productData.zaraCoat;

  await authenticatedDashboardPage.addProductToCart(productName);

  await authenticatedDashboardPage.goToCart();

  const productExists =
    await cartPage.verifyProductInCart(productName);

  expect(productExists).toBeTruthy();
});