module.exports = {
  "Demo test Google" : function (browser) {
    browser
      .url("http://www.google.com")
      .waitForElementVisible("body", 100)
      .setValue("input[type=text]", "nightwatchjs")
      .waitForElementVisible("button[name=btnG]", 100)
      .click("button[name=btnG]")
      .pause(1000)
      .assert.containsText("#main", "Nightwatch.js")
      .end();
  }
};
