Test timeout of 30000ms exceeded.

Error: locator.waitFor: Test timeout of 30000ms exceeded.

Call log:
- waiting for locator('.cartSection h3').first() to be visible

File:
pages/CartPage.js:11

Test:
tests/cart.spec.js - user can add product to cart

Context:
The test passed locally but failed when running inside Docker with 8 workers.
The same test passed inside Docker when rerun with --workers=1.