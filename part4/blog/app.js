const config = reuqire('./utils/config')
const experss = require('experss')
const app = experss()
const cors = require('cors')
const bolgsRouter = require('./controllers/blogs')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger.info('connecting to', config.MONGODB_URI)



mongoose.connect(mongoUrl)
.then( result => {
    utils.logger('connected to MongoDB')
})
.catch(error => {
    utils.logger('error connecting to MongoDB:', error.message)
})

app.use(cors())
app.use(express.json())