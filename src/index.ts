import { ExpressDriver } from '@shared/drivers/express.driver'
import bodyParser from 'body-parser'
import express from 'express'
import themeControllerFactory from '@theme/controllers'

const app = express()
const appRoot = '/'
const themePath = '/themes'
const themeRouter = express.Router()
const expressHandler = new ExpressDriver()

themeRouter
    .route(appRoot)
    .post(expressHandler.makeCallback(themeControllerFactory.makePostTheme()))

app.use(bodyParser.json())

app.use(themePath, themeRouter)

app.listen(3000, () => {
    console.log('App listening in port 3000')
})
export default app
