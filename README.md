# Playwright E-Commerce Automation Framework

A Playwright automation framework built using JavaScript to demonstrate modern UI testing, API testing, and API/UI integration testing practices.

## Project Overview

This project automates an e-commerce application using Playwright and follows industry-standard automation design patterns, including:

* Page Object Model (POM)
* Custom Playwright Fixtures
* Environment Variable Configuration
* API Testing
* API + UI Hybrid Testing
* GitHub Actions CI/CD
* Reusable Test Data Management

## Tech Stack

* Playwright
* JavaScript
* Node.js
* Git / GitHub
* GitHub Actions

## Framework Structure

```text
pages/
  Reusable page objects

fixtures/
  Custom Playwright fixtures

test-data/
  Test users and product data

utils/
  API helper utilities

tests/
  End-to-end and API test scenarios

.github/workflows/
  GitHub Actions CI pipeline
```

## Test Coverage

### Authentication

* Successful login validation
* Invalid login validation

### Cart Functionality

* Add product to cart
* Verify product exists in cart

### Checkout Flow

* Complete checkout process
* Verify order confirmation
* Capture generated order ID

### Order History

* Verify newly created orders appear in order history

### API Testing

* Authenticate through API
* Create orders through API

### API + UI Integration Testing

* Create order through API
* Validate order appears in UI order history

## Continuous Integration

This project uses GitHub Actions to automatically execute Playwright tests on every push and pull request.

Workflow steps include:

1. Install dependencies
2. Install Playwright browsers
3. Execute Playwright test suite
4. Publish Playwright HTML report artifacts

## Running Tests Locally

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test --project=chromium
```

Run a specific test:

```bash
npx playwright test tests/checkout.spec.js --project=chromium
```

View HTML report:

```bash
npx playwright show-report
```

## Author

Joshua Beaton
