import {
    BaseController,
    HttpRequest,
    HttpResponse,
} from '@shared/controllers/controller.interface'
import { ThemeDTO, ThemeProps } from '@theme/entities/theme.interface'
import { StatusCodes } from 'http-status-codes'
import { UpdateTheme } from '@theme/use-cases/use-cases.interface'

export class PatchThemeIdController implements BaseController {
    private _updateThemeUseCase: UpdateTheme

    constructor(updateThemeUseCase: UpdateTheme) {
        this._updateThemeUseCase = updateThemeUseCase
    }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { body, params } = request
        if (!params || !body) throw new Error('Missing parameters.')
        const props: Partial<ThemeProps> = {}
        if (body.name) Object.assign(props, { name: body.name })
        if (body.description)
            Object.assign(props, { description: body.description })
        if (body.outcomes) Object.assign(props, { outcomes: body.outcomes })

        const updated: ThemeDTO = await this._updateThemeUseCase.update(
            params.id,
            props,
        )

        return {
            body: updated,
            headers: {},
            statusCode: StatusCodes.OK,
        }
    }
}
