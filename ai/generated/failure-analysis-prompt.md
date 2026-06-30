# AI-Assisted Playwright Failure Analysis Prompt

You are assisting with QA automation failure triage.

Analyze the Playwright test failure below and provide:

1. A short summary of what failed
2. The most likely root cause
3. Whether the issue appears to be:
   - Application defect
   - Test automation issue
   - Environment/timing issue
   - Test data issue
4. Suggested debugging steps
5. A draft bug report if the issue appears to be an application defect
6. Recommended improvements to make the automated test more reliable

Focus on practical QA/SDET analysis. Do not assume facts that are not present in the failure output.

## Failure Output

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