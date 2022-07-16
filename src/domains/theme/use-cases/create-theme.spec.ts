import { ThemeDTO, ThemeProps } from '@theme/entities/theme.interface'
import chai, { expect } from 'chai'
import { CCreateTheme } from './create-theme'
import { CreateTheme } from './use-cases.interface'
import { CreateThemeRepository } from '@theme/repositories/theme.repository.interface'
import { generateMockThemeProps } from '@theme/entities/theme.utils.spec'
import { makeMockCreateThemeRepository } from '@theme/repositories/theme.repository.utils.spec'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
describe('Create Theme use case', () => {
    describe('Create new theme', () => {
        it('should call save method on repository', async () => {
            const createRepo: CreateThemeRepository =
                makeMockCreateThemeRepository()
            const createTheme: CreateTheme = new CCreateTheme(createRepo)
            const createThemeProps: ThemeProps = generateMockThemeProps()
            await createTheme.create(createThemeProps)
            expect(createRepo.saveTheme).to.have.been.called
        })
        it('should return a theme dto', async () => {
            const createRepo: CreateThemeRepository =
                makeMockCreateThemeRepository()
            const createTheme: CreateTheme = new CCreateTheme(createRepo)
            const createThemeProps: ThemeProps = generateMockThemeProps()
            const createResult: ThemeDTO = await createTheme.create(
                createThemeProps,
            )
            expect(createResult, 'should have all props').to.deep.contain(
                createThemeProps,
            )
            expect(
                createResult,
                'should have createdAt property',
            ).to.haveOwnProperty('createdAt')
            expect(
                createResult,
                'should have updatedAt property',
            ).to.haveOwnProperty('updatedAt')
            expect(createResult, 'should have id property').to.haveOwnProperty(
                'id',
            )
            expect(
                createResult.updatedAt,
                'should have a createdAt equal to updatedAt',
            ).to.deep.equal(createResult.createdAt)
        })
    })
})
