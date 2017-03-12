const test = require("tape");
const utils = require("../utils");

test("hello", t => {
  t.equal(utils.hello(), "Hello TSCLI!");
  t.end();
});

test("goodbye", t => {
  t.equal(utils.goodbye(), "See you later =)");
  t.end();
});
