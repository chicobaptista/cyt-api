/* eslint-disable no-unused-vars */

import { HttpMethods } from '@shared/drivers/http.driver.interface'
import { StatusCodes } from 'http-status-codes'
export interface BaseController {
    /**
     * Handles a {@link HttpRequest} with the corresponding use case and returns asynchronously a {@link HttpResponse} with the result.
     *
     * @param  {HttpRequest} httpRequest
     * @returns Promise
     * @fulfill {@link HttpResponse}
     */
    handle(httpRequest: HttpRequest): Promise<HttpResponse>
}

export interface HttpRequest {
    body?: Record<string, any>
    query?: Record<string, any>
    params?: Record<string, any>
    ip?: string
    method?: HttpMethods
    path?: string
    headers?: Record<string, any>
}

export interface HttpResponse {
    headers: Record<string, any>
    body: Record<string, any>
    statusCode: StatusCodes
}
