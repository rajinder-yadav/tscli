module.exports = {
  "Demo test Google": browser => {
    browser
      .url("http://www.google.com")
      .waitForElementVisible("body", 100)
      .setValue("input[type=text]", "nightwatchjs")
      .waitForElementVisible("button[name=btnG]", 100)
      .click("button[name=btnG]")
      .pause(1000)
      .assert.containsText("#main", "Nightwatch.js")
      .end();
  },
  "Demo test duckduckgo": browser => {
    browser
      .url("https://duckduckgo.com")
      .waitForElementVisible("body", 100)
      .setValue("input[type=text]", "nightwatchjs")
      .waitForElementVisible("input[id=search_button_homepage]", 100)
      .click("input[id=search_button_homepage]")
      .pause(1000)
      .assert.containsText("body", "Nightwatch.js")
      .end();
  }
};
