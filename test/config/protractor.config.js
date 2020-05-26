const yargs = require('yargs').argv;

exports.config = {
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {'w3c': false},
    shardTestFiles: yargs.instances > 1,
    maxInstances: yargs.instances || 1,
  },
  seleniumAddress: 'http://localhost:4444/wd/hub/',
  //directConnect: true,
  framework: 'mocha',
  specs: [
    '../specs/*.js',
  ],
  mochaOpts: {
    reporter: 'spec',
    timeout: 70000
  }
};
