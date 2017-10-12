"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const utils = require("../utils");
ava_1.test("hello", t => {
    t.is(utils.hello(), "Hello TSCLI!");
});
ava_1.test("goodbye", t => {
    t.is(utils.goodbye(), "See you later =)");
});
//# sourceMappingURL=test.utils.js.map