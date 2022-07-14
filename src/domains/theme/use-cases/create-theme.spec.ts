import chai, { expect } from 'chai'
import { CCreateTheme } from './create-theme'
import { CreateTheme } from './use-cases.interface'
import { CreateThemeRepository } from '@theme/repositories/theme.repository.interface'
import { ThemeProps } from '@theme/entities/theme.interface'
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
    })
})
