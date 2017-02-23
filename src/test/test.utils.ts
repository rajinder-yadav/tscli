import * as test from "tape";
import * as utils from "../lib/utils";

test( "hello", t => {
  t.equal( utils.hello(), "Hello TSCLI!" );
  t.end();
} );

test( "goodbye", t => {
  t.equal( utils.goodbye(), "See you back =)" );
  t.end();
} );
