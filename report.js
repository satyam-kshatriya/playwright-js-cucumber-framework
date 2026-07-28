const reporter = require("cucumber-html-reporter");

const options = {
  theme: "bootstrap",
  jsonFile: "reports/cucumber-report.json",
  output: "reports/cucumber-report.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    Application: "Practice Test Automation",
    Environment: "QA",
    Browser: "Chrome",
    Platform: "Windows",
    Executed: "Local Machine",
  },
};

reporter.generate(options);
