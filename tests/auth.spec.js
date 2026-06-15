import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { userData } from '../test-data/userData.js';
import { DashboardPage } from '../pages/DashboardPage.js';

// Define a test case
test('user can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goTo();

  await loginPage.login(
    userData.validUser.email,
    userData.validUser.password
  );

  await dashboardPage.expectDashboardLoaded();

  const productTitles = await dashboardPage.getProductTitles();

  console.log(productTitles);

  expect(productTitles.length).toBeGreaterThan(0);
});

test('user sees error for invalid login', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goTo();

  await loginPage.login(
    userData.invalidUser.email,
    userData.invalidUser.password
  );


    const errorMessage =
    await loginPage.getLoginErrorMessage();

  console.log(errorMessage);

  expect(errorMessage)
    .toContain('Incorrect');


});