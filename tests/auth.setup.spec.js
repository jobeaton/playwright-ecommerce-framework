import { test as setup } from '../fixtures/baseTest.js';
import { userData } from '../test-data/userData.js';

setup('authenticate user', async ({ loginPage, dashboardPage, page }) => {
  await loginPage.goTo();

  await loginPage.login(
    userData.validUser.email,
    userData.validUser.password
  );

  await dashboardPage.expectDashboardLoaded();

  await page.context().storageState({
    path: 'playwright/.auth/user.json'
  });
});