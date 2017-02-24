import * as bunyan from "bunyan";

const log = bunyan.createLogger( {
  name: "main",
  streams: [
    {
      level: "info",
      path: "./logs/main.log"
    }
  ]
} );

const welcome = (): string => {
  return "Welcome to TSCLI";
}

log.info( "Entering main" );

console.log( welcome() );

log.info( "Exiting main" );
