export class CheckoutPage {
  constructor(page) {
    this.page = page;

    // Country autocomplete input on checkout page
    this.countryInput = page.locator('[placeholder="Select Country"]');

    // Country dropdown suggestions
    this.countryOptions = page.locator('.ta-item');

    // Place Order button
    this.placeOrderButton = page.locator('.action__submit');
  }

async selectCountry(searchText, countryName) {
  await this.countryInput.click();

  await this.countryInput.pressSequentially(searchText);

  await this.countryOptions.first().waitFor();

  await this.page
    .getByRole('button', {
      name: new RegExp(`${countryName}$`)
    })
    .click();
}

  async placeOrder() {
    await this.placeOrderButton.click();
  }
}