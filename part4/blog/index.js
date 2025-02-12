const config = require('./utils/config')
const logger = require('./utils/logger')
const app = require('./app')


const PORT = config.PORT
app.listen(PORT, () => {
  logger.info(`server run on ${config.PORT}`)
})