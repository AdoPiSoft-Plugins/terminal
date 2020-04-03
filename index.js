'use strict'
var router = require("./router")
var { app } = require('../core.js')

module.exports = {
  async init(){
    app.use(router)
  },
}
