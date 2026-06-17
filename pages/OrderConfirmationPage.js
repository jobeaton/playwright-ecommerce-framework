export class OrderConfirmationPage {
  constructor(page) {
    this.page = page;

    this.confirmationMessage = page.locator('.hero-primary');

    this.orderId = page.locator('label.ng-star-inserted');
  }

  async getConfirmationMessage() {
    return await this.confirmationMessage.textContent();
  }

  async getOrderId() {
    const rawOrderId = await this.orderId.textContent();

    return rawOrderId.replaceAll('|', '').trim();
  }
}