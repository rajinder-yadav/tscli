import * as test from "tape";
import * as utils from "../utils";

test( "hello", t => {
  t.equal( utils.hello(), "Hello TSCLI!" );
  t.end();
} );

test( "goodbye", t => {
  t.equal( utils.goodbye(), "See you later =)" );
  t.end();
} );
