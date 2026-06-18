import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';
import { OrderConfirmationPage } from '../pages/OrderConfirmationPage.js';
import { OrdersPage } from '../pages/OrdersPage.js';
import { userData } from '../test-data/userData.js';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  orderConfirmationPage: async ({ page }, use) => {
    await use(new OrderConfirmationPage(page));
  },

  ordersPage: async ({ page }, use) => {
    await use(new OrdersPage(page));
  },

  authenticatedDashboardPage: async ({ page }, use) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goTo();

  await loginPage.login(
    userData.validUser.email,
    userData.validUser.password
  );

  await dashboardPage.expectDashboardLoaded();

  await use(dashboardPage);
},
});

export { expect } from '@playwright/test';