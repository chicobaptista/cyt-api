import { BaseController } from '@shared/controllers/controller.interface'

/* eslint-disable no-unused-vars */
export enum HttpMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
    OPTIONS = 'OPTIONS',
}

export interface HttpDriver {
    makeCallback(controller: BaseController): Function
}
