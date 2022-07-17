import { CReadTheme } from './read-theme'
import { ReadTheme } from './use-cases.interface'
import { ReadThemeRepository } from '@theme/repositories/theme.repository.interface'
import { expect } from 'chai'
import { generateMockThemeDto } from '@theme/entities/theme.utils.spec'
import { makeMockReadThemeRepository } from '@theme/repositories/theme.repository.utils.spec'
import { v4 } from 'uuid'

describe('Read Theme Use Case', () => {
    describe('Read Theme by Id', () => {
        it('should call themeRepository.get method', async () => {
            const readRepo: ReadThemeRepository = makeMockReadThemeRepository()
            const readTheme: ReadTheme = new CReadTheme(readRepo)
            const themeIdProp = v4()
            await readTheme.read(themeIdProp)
            expect(readRepo.readTheme).to.have.been.calledWith(themeIdProp)
        })
        it('should return a theme dto', async () => {
            const readRepo: ReadThemeRepository = makeMockReadThemeRepository()
            const readTheme: ReadTheme = new CReadTheme(readRepo)
            const mockThemeDto = generateMockThemeDto()
            const mockThemeProps = {
                id: mockThemeDto.id,
                name: mockThemeDto.name,
                description: mockThemeDto.description,
                outcomes: mockThemeDto.outcomes,
            }

            const foundTheme = await readTheme.read(mockThemeDto.id)
            expect(foundTheme).to.deep.contain(mockThemeProps)
        })
    })
})
