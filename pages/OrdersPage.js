export class OrdersPage {
  constructor(page) {
    this.page = page;

    this.ordersButton = page.getByRole('button', { name: /ORDERS/ });

    this.orderRows = page.locator('tbody tr');
  }

  async goToOrders() {
    await this.ordersButton.click();
  }

  async verifyOrderExists(orderId) {
    await this.orderRows.first().waitFor();

    const rows = await this.orderRows.allTextContents();

    return rows.some(row => row.includes(orderId));
  }
}