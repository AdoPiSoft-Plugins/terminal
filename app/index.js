const router = require("./router");
const {app} = require('@adopisoft/exports')

module.exports = {
  async init() {
    app.use(router)
  }
};