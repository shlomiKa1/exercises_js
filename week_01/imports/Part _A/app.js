const { logger } = require("./logger.js");

function app() {
  logger("Enter to app....", "info");
  logger("There is not a connection", "error");
}

module.exports = { app };
