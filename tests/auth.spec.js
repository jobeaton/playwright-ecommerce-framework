import { test, expect } from '../fixtures/baseTest.js';
import { userData } from '../test-data/userData.js';

// Verifies a valid user can successfully log in
// and reach the dashboard page
test('user can login successfully', async ({
  loginPage,
  dashboardPage
}) => {

  // Navigate to the login page
  await loginPage.goTo();

  // Authenticate with valid test credentials
  await loginPage.login(
    userData.validUser.email,
    userData.validUser.password
  );

  // Confirm dashboard loaded after login
  await dashboardPage.expectDashboardLoaded();

  // Retrieve available product titles
  const productTitles =
    await dashboardPage.getProductTitles();

  // Verify products are displayed
  expect(productTitles.length).toBeGreaterThan(0);
});

// Verifies an error message is displayed
// when invalid credentials are used
test('user sees error for invalid login', async ({
  loginPage
}) => {

  // Navigate to the login page
  await loginPage.goTo();

  // Attempt login with invalid credentials
  await loginPage.login(
    userData.invalidUser.email,
    userData.invalidUser.password
  );

  // Capture login error message
  const errorMessage =
    await loginPage.getLoginErrorMessage();

  // Verify correct validation message appears
  expect(errorMessage).toContain('Incorrect');
});