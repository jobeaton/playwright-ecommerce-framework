# Playwright E-Commerce Automation Framework

## Overview

This project is a Playwright end-to-end automation framework built using JavaScript and the Page Object Model (POM) design pattern.

The framework automates key e-commerce user workflows including authentication and shopping cart functionality while demonstrating scalable test architecture, reusable page objects, and maintainable test design.

## Technologies Used

* Playwright
* JavaScript (ES Modules)
* Page Object Model (POM)
* Git / GitHub

## Project Structure

```text
pages/
├── LoginPage.js
├── DashboardPage.js
└── CartPage.js

test-data/
├── userData.js
└── productData.js

tests/
├── auth.spec.js
└── cart.spec.js
```

## Implemented Test Scenarios

### Authentication

* Successful user login
* Invalid login validation

### Shopping Cart

* Add product to cart
* Verify product exists in cart

## Design Principles

This framework follows several automation engineering best practices:

* Page Object Model (POM)
* Centralized test data
* Reusable page methods
* Dynamic element selection
* Clear separation of test logic and page interactions

## Running Tests

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run tests in Chromium:

```bash
npx playwright test --project=chromium
```

Run tests headed:

```bash
npx playwright test --headed
```

## Future Enhancements

* Checkout flow automation
* Order confirmation validation
* Environment variable support
* API testing
* GitHub Actions CI/CD integration
* HTML reporting enhancements
* Playwright fixtures
