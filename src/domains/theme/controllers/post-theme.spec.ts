import { HttpRequest } from '@shared/controllers/controller.interface'
import { PostThemeController } from './post-theme'
import { ThemeProps } from '@theme/entities/theme.interface'
import { expect } from 'chai'
import { generateCreateUseCaseStub } from '@theme/use-cases/theme-use-cases.utils.spec'
import { generateMockThemeProps } from '@theme/entities/theme.utils.spec'

describe('Post Theme Controller', () => {
    describe('Handle Post Request', () => {
        it('should call CreateThemeUseCase.create', async () => {
            const { postThemeController, createThemeUseCase, request } =
                makeSut()
            await postThemeController.handle(request)

            expect(createThemeUseCase.create).to.have.been.called
        })

        it('should return a Created response with a Theme DTO on the body', async () => {
            const { postThemeController, mockThemeProps, request } = makeSut()
            const response = await postThemeController.handle(request)

            expect(
                response.statusCode,
                'should have HttpStatus Created',
            ).to.equal(201)
            expect(
                response.body,
                'should have the props on the dto inside the response body',
            ).to.deep.contain(mockThemeProps)
            expect(response.body, 'should have id property').to.haveOwnProperty(
                'id',
            )
            expect(
                response.body,
                'should have createdAt property',
            ).to.haveOwnProperty('createdAt')
            expect(
                response.body,
                'should have updatedAt property',
            ).to.haveOwnProperty('updatedAt')
        })
    })
})

function makeSut() {
    const createThemeUseCase = generateCreateUseCaseStub()
    const postThemeController: PostThemeController = new PostThemeController(
        createThemeUseCase,
    )
    const mockThemeProps: ThemeProps = generateMockThemeProps()
    const request: HttpRequest = {
        headers: {},
        body: { ...mockThemeProps },
    }

    return { createThemeUseCase, postThemeController, mockThemeProps, request }
}
