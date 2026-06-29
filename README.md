# Playwright E-Commerce Automation Framework

A Playwright automation framework built with JavaScript to demonstrate modern UI testing, API testing, API/UI integration testing, API mocking, CI/CD, and Dockerized test execution.

## Project Overview

This project automates an e-commerce application using Playwright and follows maintainable automation design practices, including:

* Page Object Model (POM)
* Custom Playwright fixtures
* Environment variable configuration
* Reusable test data management
* API testing
* API + UI hybrid testing
* API mocking with route interception
* GitHub Actions CI/CD
* Dockerized test execution

## Tech Stack

* Playwright
* JavaScript
* Node.js
* Git / GitHub
* GitHub Actions
* Docker

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
  End-to-end, API, API/UI, and API mocking test scenarios

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

### API Mocking

* Mock empty order history responses
* Mock backend failure responses
* Validate frontend behavior under controlled network conditions

## Continuous Integration

This project uses GitHub Actions to automatically execute Playwright tests on every push and pull request.

Workflow steps include:

* Install dependencies
* Install Playwright browsers
* Execute Playwright test suite
* Publish Playwright HTML report artifacts

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

View the HTML report:

```bash
npx playwright show-report
```

## Running Tests with Docker

Build the Docker image:

```bash
docker build -t playwright-ecommerce-tests .
```

Run the Playwright test suite inside a container:

```bash
docker run --rm --env-file .env playwright-ecommerce-tests
```

The Docker container runs the Chromium Playwright test suite with a single worker for stable execution in a containerized environment. Environment variables are passed at runtime using the `.env` file instead of being copied into the Docker image.

## Author

Joshua Beaton
