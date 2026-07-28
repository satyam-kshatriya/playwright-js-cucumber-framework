module.exports = {
  default: {
    require: ["support/hooks.js", "step_definitions/*.js"],
    paths: ["features/*.feature"],
    format: ["progress", "json:reports/cucumber-report.json"],
  },
};
