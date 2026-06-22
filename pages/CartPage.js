export class CartPage {
  constructor(page) {
    this.page = page;

    this.cartProducts = page.locator(".cartSection h3");

    this.checkoutButton = page.getByRole("button", { name: "Checkout" });
  }

  async verifyProductInCart(productName) {
    await this.cartProducts.first().waitFor();

    const products = await this.cartProducts.allTextContents();

    return products.some((product) => product.trim() === productName);
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }
}
