const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const terminal_ctrl = require("./controllers/terminal_ctrl.js");

router.get("/terminal-plugin", terminal_ctrl.get);
router.post("/terminal-plugin/run-command", express.urlencoded({
  extended: true
}), bodyParser.json(), terminal_ctrl.runCommand);
router.post("/terminal-plugin/abort-commands", express.urlencoded({
  extended: true
}), bodyParser.json(), terminal_ctrl.abortCommands);

module.exports = router;