import {
    BaseController,
    HttpRequest,
    HttpResponse,
} from '@shared/controllers/controller.interface'
import { ThemeDTO, ThemeProps } from '@theme/entities/theme.interface'
import { CreateTheme } from '@theme/use-cases/use-cases.interface'
import { StatusCodes } from 'http-status-codes'

export class PostThemeController implements BaseController {
    private _createThemeUseCase: CreateTheme

    constructor(createThemeUseCase: CreateTheme) {
        this._createThemeUseCase = createThemeUseCase
    }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { body } = request
        const props: ThemeProps = {
            name: body.name,
            description: body.description,
            outcomes: body.outcomes,
        }
        const created: ThemeDTO = await this._createThemeUseCase.create(props)

        return {
            body: created,
            headers: {},
            statusCode: StatusCodes.CREATED,
        }
    }
}
