/* eslint-disable sort-imports */
import { GetThemeByIDController } from './get-theme-id'
import { HttpRequest } from '@shared/controllers/controller.interface'
import { ReadTheme } from '@theme/use-cases/use-cases.interface'
import chai, { expect } from 'chai'
import { generateMockThemeDto } from '@theme/entities/theme.utils.spec'
import { generateReadUseCaseStub } from '@theme/use-cases/theme-use-cases.utils.spec'
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiAsPromised)

describe('Get Theme By Id Controller', () => {
    describe('Handle Get Request', () => {
        it('should call ReadThemeUseCase.read', async () => {
            const { getThemeIdController, readThemeUseCase, request } =
                makeSut()
            await getThemeIdController.handle(request)

            expect(readThemeUseCase.read).to.have.been.called
        })
        it('should return an OK response with a Theme DTO on the body', async () => {
            const { getThemeIdController, readProps, request } = makeSut()
            const response = await getThemeIdController.handle(request)

            expect(response.statusCode, 'should have HttpStatus OK').to.equal(
                200,
            )
            expect(response.body).to.deep.contain(readProps)
        })
        describe('on missing id param', () => {
            it('should throw an error', async () => {
                const { getThemeIdController, request } = makeSut()
                request.params = {}
                return expect(
                    getThemeIdController.handle(request),
                    'should throw',
                ).to.eventually.be.rejectedWith(
                    'Missing or invalid id parameter.',
                )
            })
        })
        describe('on invalid id param', () => {
            it('should throw an error', async () => {
                const { getThemeIdController, request } = makeSut()
                request.params = { id: 'mockId' }
                return expect(
                    getThemeIdController.handle(request),
                    'should throw',
                ).to.eventually.be.rejectedWith(
                    'Missing or invalid id parameter.',
                )
            })
        })
    })
})

function makeSut() {
    const readThemeUseCase: ReadTheme = generateReadUseCaseStub()
    const getThemeIdController: GetThemeByIDController =
        new GetThemeByIDController(readThemeUseCase)
    const mockThemeDto = generateMockThemeDto()
    const request: HttpRequest = {
        params: { id: mockThemeDto.id },
    }
    const readProps = {
        id: mockThemeDto.id,
        name: mockThemeDto.name,
        description: mockThemeDto.description,
        outcomes: mockThemeDto.outcomes,
    }

    return {
        readThemeUseCase,
        getThemeIdController,
        mockThemeDto,
        request,
        readProps,
    }
}
