const test = require("ava").test;
const utils = require("../utils");

test( "hello", t => {
  t.is( utils.hello(), "Hello TSCLI!" );
} );

test( "goodbye", t => {
  t.is( utils.goodbye(), "See you later =)" );
} );
