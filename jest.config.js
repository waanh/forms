module.exports = {
    testEnvironment: "jest-environment-jsdom",
    transform: {
      '^.+\\.js$': 'babel-jest', 
      '^.+\\.css$': 'jest-transform-stub',  
    },
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',  
    },
    transformIgnorePatterns: [
      '/node_modules/(?!some-module-to-transform).+\\.js$',  
    ],
  };
  
  