'use strict';

require('chromedriver');
const {Builder, By} = require('selenium-webdriver');
const {assert} = require('chai');

const driver = new Builder().forBrowser('chrome').build();

describe('Simple App', function() {
  describe('for anonymous user', function () {
    it('home page shows login link', async function () {
      assert.fail("test is not yet implemented");
    });
  });
});
