"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test = require("tape");
const utils = require("../utils");
test("hello", t => {
    t.equal(utils.hello(), "Hello TSCLI!");
    t.end();
});
test("goodbye", t => {
    t.equal(utils.goodbye(), "See you back =)");
    t.end();
});
//# sourceMappingURL=test.utils.js.map