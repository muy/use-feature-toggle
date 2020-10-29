const base = require("./jest.config.base.js");

module.exports = {
  ...base,
  coverageDirectory: "<rootDir>/coverage/",
  project: ["<rootDir>/packages/*/jest.config.js"],
};
