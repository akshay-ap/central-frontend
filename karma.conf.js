// https://github.com/Nikku/karma-browserify
module.exports = function (config) {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['browserify', 'mocha'],
    files: [
      'test/setup.js',
      'test/**/*.spec.js',
      { pattern: 'assets/fonts/icomoon.ttf', included: false, served: true }
    ],
    proxies: {
      '/assets/': '/base/assets/'
    },
    reporters: ['spec'],
    preprocessors: {
      'test/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      // needed to enable mocks
      plugin: [require('proxyquireify').plugin]
    },
    // if you want to continuously re-run tests on file-save,
    // replace the following line with `autoWatch: true`
    singleRun: true
  })
}
