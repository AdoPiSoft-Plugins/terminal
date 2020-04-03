'use strict'

var core = require('../core')
var { router } = core
var terminal_ctrl = require('./controllers/terminal_ctrl')

router.get('/terminal-plugin', terminal_ctrl.get)
router.post('/terminal-plugin/run-command', terminal_ctrl.runCommand)
router.post('/terminal-plugin/abort-commands', terminal_ctrl.abortCommands)

module.exports = router
