import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';
import { CartPage } from '../pages/CartPage.js';

import { userData } from '../test-data/userData.js';
import { productData } from '../test-data/productData.js';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goTo();

  await loginPage.login(
    userData.validUser.email,
    userData.validUser.password
  );

  await dashboardPage.expectDashboardLoaded();
});


test('user can add product to cart', async ({ page }) => {

  const dashboardPage = new DashboardPage(page);

  const cartPage = new CartPage(page);

  const productName = productData.zaraCoat;

  await dashboardPage.addProductToCart(productName);

  await dashboardPage.goToCart();

  const productExists =
    await cartPage.verifyProductInCart(productName);

  expect(productExists).toBeTruthy();
});