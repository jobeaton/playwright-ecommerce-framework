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

{{FAILURE_OUTPUT}}