// Represents the shopping cart page
export class CartPage {

    constructor(page) {

        this.page = page;

        // Product titles displayed inside cart
        this.cartProducts = page.locator('.cartSection h3');
    }

    // Verify specific product exists in cart
    async verifyProductInCart(productName) {

        await this.cartProducts.first().waitFor();

        // Get all cart product names
        const products = await this.cartProducts.allTextContents();

        console.log(products);

        // Return true/false depending on match
        return products.includes(productName);
    }
}