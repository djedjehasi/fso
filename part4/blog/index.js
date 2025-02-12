const config = require('./utils/config')
const logger = require('./utils/logger')
const express = require('express')
const app = express()
const cors = require('cors')


const PORT = config.PORT
app.listen(PORT, () => {
  logger.info(`server run on ${config.PORT}`)
})