import { ExpressDriver } from '@shared/drivers/express.driver'
import { appConfig } from '@shared/config'
import bodyParser from 'body-parser'
import express from 'express'
import themeControllerFactory from '@theme/controllers'

const app = express()
const themePath = '/themes'
const themeRouter = express.Router()
const expressHandler = new ExpressDriver()

const { port, root } = appConfig
themeRouter
    .route(root)
    .post(expressHandler.makeCallback(themeControllerFactory.makePostTheme()))

themeRouter
    .route(`${root}:id`)
    .get(expressHandler.makeCallback(themeControllerFactory.makeGetIdTheme()))
app.use(bodyParser.json())

app.use(themePath, themeRouter)

app.listen(port, () => {
    console.log(`App listening in port ${port}`)
})
export default app
