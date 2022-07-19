import {
    BaseController,
    HttpRequest,
    HttpResponse,
} from '@shared/controllers/controller.interface'
import { ReadTheme } from '@theme/use-cases/use-cases.interface'
import { StatusCodes } from 'http-status-codes'
import { ThemeDTO } from '@theme/entities/theme.interface'

export class GetThemeByIDController implements BaseController {
    private _readThemeUseCase: ReadTheme

    constructor(useCase: ReadTheme) {
        this._readThemeUseCase = useCase
    }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { params } = request
        if (!params) throw new Error('Missing id parameter.')
        const found: ThemeDTO = await this._readThemeUseCase.read(params.id)

        return {
            body: found,
            headers: {},
            statusCode: StatusCodes.OK,
        }
    }
}
