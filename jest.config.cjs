module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./src/setupTests.js"],
  moduleNameMapper: {
    "\\.css$": require.resolve("./src/test/style-mock.js"),
  },
  collectCoverageFrom: [
    "./src/**/*.{ts,tsx}",
    // "!./src/**/*.interface.ts",
    "!./src/vite-env.d.ts",
  ],
};
