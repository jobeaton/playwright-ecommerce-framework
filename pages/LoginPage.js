export class LoginPage {
    
    constructor(page) {
        this.page = page;

        this.emailInput = page.locator('#userEmail');

        this.passwordInput = page.locator('#userPassword');

        this.loginButton = page.locator('#login');

        // Login error message
        this.loginErrorMessage = page.locator("[class*='flyInOut']");


    }

      // Navigates to the login page
  async goTo() {

    // Because we configured baseURL in playwright.config.js,
    // we only need the route here
    await this.page.goto('/client');
  }

  // Reusable login method
  // Tests can now simply call:
  // await loginPage.login(email, password)
  async login(email, password) {

    // Fill email field
    await this.emailInput.fill(email);

    // Fill password field
    await this.passwordInput.fill(password);

    // Click login button
    await this.loginButton.click();
  }

  // Returns login error text
  async getLoginErrorMessage() {

    return await this.loginErrorMessage.textContent();
}



}