import { HttpDriver, HttpMethods } from './http.driver.interface'
import { Request, Response } from 'express'
import { BaseController } from '@shared/controllers/controller.interface'
import { StatusCodes } from 'http-status-codes'

export class ExpressDriver implements HttpDriver {
    makeCallback(controller: BaseController) {
        return (req: Request, res: Response) => {
            const httpRequest = {
                body: req.body,
                query: req.query as Record<string, any>,
                params: req.params as Record<string, any>,
                ip: req.ip,
                method: HttpMethods[req.method],
                path: req.path,
                headers: {
                    'Content-Type': req.get('Content-Type'),
                    Referer: req.get('referer'),
                    'User-Agent': req.get('User-Agent'),
                },
            }
            controller
                .handle(httpRequest)
                .then((httpResponse) => {
                    if (httpResponse.headers) {
                        res.set(httpResponse.headers)
                    }
                    res.type('json')
                    res.status(httpResponse.statusCode).send(httpResponse.body)
                })
                .catch((e: Error) => {
                    console.log(e)
                    return res
                        .status(StatusCodes.INTERNAL_SERVER_ERROR)
                        .send({ error: 'An unkown error occurred.' })
                })
        }
    }
}
