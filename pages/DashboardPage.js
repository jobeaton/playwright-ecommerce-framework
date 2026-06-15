// This class represents the product/dashboard page shown after login
export class DashboardPage {
  constructor(page) {
    // Store Playwright's page object for use inside this class
    this.page = page;

    // Locator for all product cards on the dashboard
    this.productCards = page.locator('.card-body');

    // Locator for product names inside each card
    this.productTitles = page.locator('.card-body b');

    this.cartButton = page.locator("[routerlink*='cart']");
  }

  // Assertion helper: verifies the dashboard loaded successfully
  async expectDashboardLoaded() {
    await this.productCards.first().waitFor();
  }

  // Returns all product names as an array of strings
  async getProductTitles() {
    return await this.productTitles.allTextContents();
  }

  // Adds a specific product to the cart
async addProductToCart(productName) {

    // Get all product cards
    const products = this.productCards;

    // Count how many product cards exist
    const count = await products.count();

    // Loop through each product card
    for (let i = 0; i < count; ++i) {

        // Get the product title text inside the current card
        const productTitle = await products
            .nth(i)
            .locator('b')
            .textContent();

        // Check if the title matches the desired product
        if (productTitle === productName) {

            // Click the "Add To Cart" button
            // only for the matching product
            await products
                .nth(i)
                .locator('text= Add To Cart')
                .click();

            break;
        }
    }
}
// Navigate to cart page
async goToCart() {
    await this.cartButton.click();
}
}