module.exports = {
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
      ".(css|less|scss)$": "identity-obj-proxy",
    },
  };