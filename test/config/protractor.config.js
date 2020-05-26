const yargs = require('yargs').argv;

exports.config = {
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {'w3c': false},
    shardTestFiles: yargs.instances > 1,
    maxInstances: yargs.instances || 1,
  },
  seleniumAddress: 'http://localhost:4444/wd/hub/',
  framework: 'mocha',
  specs: [
    '../specs/*.js',
  ],
  mochaOpts: {
    reporter: 'mochawesome',
    reporterOptions: {
      overwrite: true,
      html: true,
      json: true
    },
    timeout: 70000
  },
};
