const bunyan = require("bunyan");

const log = bunyan.createLogger({
  name: "main",
  streams: [
    {
      level: "info",
      path: "./logs/main.log"
    }
  ]
});

const welcome = () => {
  return "Welcome to TSCLI - Demo program is working!!!";
};

log.info("Entering main");

console.log(welcome());

log.info("Exiting main");
