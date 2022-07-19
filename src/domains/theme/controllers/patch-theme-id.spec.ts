import { HttpRequest } from '@shared/controllers/controller.interface'
import { PatchThemeIdController } from './patch-theme-id'
import { UpdateTheme } from '@theme/use-cases/use-cases.interface'
import { expect } from 'chai'
import { generateUpdateUseCaseStub } from '@theme/use-cases/theme-use-cases.utils.spec'
import { v4 } from 'uuid'

describe('Patch Theme by Id Controller', () => {
    describe('Handle Patch Request', () => {
        it('should call UpdateThemeUseCase.update', async () => {
            const { updateThemeUseCase, request, patchThemeIdController } =
                makeSut()

            await patchThemeIdController.handle(request)

            expect(updateThemeUseCase.update).to.have.been.called
        })
        it('should return an Updated Theme DTO with the given changes', async () => {
            const { request, patchThemeIdController } = makeSut()

            const response = await patchThemeIdController.handle(request)
            console.log(response)
            expect(
                response.body,
                'should have changes inside return DTO',
            ).to.deep.contain(request.body)
            expect(
                response.body,
                'should have same id inside return DTO',
            ).to.deep.contain(request.params)
        })
    })
})

function makeSut() {
    const updateThemeUseCase: UpdateTheme = generateUpdateUseCaseStub()
    const patchThemeIdController: PatchThemeIdController =
        new PatchThemeIdController(updateThemeUseCase)
    const request: HttpRequest = {
        params: {
            id: v4(),
        },
        body: {
            outcomes: ['New Outcome 1'],
        },
    }

    return { updateThemeUseCase, patchThemeIdController, request }
}
