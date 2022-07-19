import { ExpressDriver } from '@shared/drivers/express.driver'
import express from 'express'
import themeControllerFactory from '@theme/controllers'

const themePath = '/themes'

const router = express.Router()

const expressHandler = new ExpressDriver()

router
    .route(`${themePath}`)
    .post(expressHandler.makeCallback(themeControllerFactory.makePostTheme()))

router
    .route(`${themePath}/:id`)
    .get(expressHandler.makeCallback(themeControllerFactory.makeGetIdTheme()))
    .patch(
        expressHandler.makeCallback(themeControllerFactory.makePatchIdTheme()),
    )

export default Object.freeze({ router })
