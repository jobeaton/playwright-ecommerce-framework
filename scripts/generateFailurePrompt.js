const fs = require("fs");
const path = require("path");

const promptTemplatePath = path.join(
  "ai",
  "prompts",
  "failure-analysis-prompt.md",
);
const sampleFailurePath = path.join(
  "ai",
  "examples",
  "sample-failure-input.md",
);
const outputDir = path.join("ai", "generated");
const outputPath = path.join(outputDir, "failure-analysis-prompt.md");

if (!fs.existsSync(promptTemplatePath)) {
  throw new Error(`Prompt template not found: ${promptTemplatePath}`);
}

if (!fs.existsSync(sampleFailurePath)) {
  throw new Error(`Sample failure input not found: ${sampleFailurePath}`);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const promptTemplate = fs.readFileSync(promptTemplatePath, "utf-8");
const failureOutput = fs.readFileSync(sampleFailurePath, "utf-8");

const generatedPrompt = promptTemplate.replace(
  "{{FAILURE_OUTPUT}}",
  failureOutput,
);

fs.writeFileSync(outputPath, generatedPrompt);

console.log(`AI failure analysis prompt generated successfully: ${outputPath}`);
