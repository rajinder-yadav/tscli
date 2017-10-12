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

export default log;

