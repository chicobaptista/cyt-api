import { appConfig } from '@shared/config'
import bodyParser from 'body-parser'
import express from 'express'
import themeRouter from '@theme/router/theme.router'

const app = express()

const { port, root } = appConfig

app.use(bodyParser.json())

app.use(root, themeRouter.router)

app.listen(port, () => {
    console.log(`App listening in port ${port}`)
})
export default app
