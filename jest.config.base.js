module.exports = {
  collectCoverage: true,
  roots: ["<rootDir>/lib", "<rootDir>/__tests__"],
  transform: { "^.+\\.jsx?$": "babel-jest" },
  verbose: true,
};
