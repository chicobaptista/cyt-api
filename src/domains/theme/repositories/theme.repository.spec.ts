import { CThemeRepository } from './theme.repository'
import { DbDriver } from '@shared/drivers/db.driver.interface'
import { ThemeDTO } from '@theme/entities/theme.interface'
import { ThemeRepository } from './theme.repository.interface'
import driverSpecUtils from '@shared/drivers/db.driver.utils.spec'
import { expect } from 'chai'
import { generateMockThemeDto } from '@theme/entities/theme.utils.spec'

describe('Theme Repository', async () => {
    let dbDriver: DbDriver<ThemeDTO>
    let themeRepo: ThemeRepository

    let themeId: string
    before(async () => {
        dbDriver = await driverSpecUtils.makeDbStub()
        themeRepo = new CThemeRepository(dbDriver)
    })
    describe('Save Theme', () => {
        it('should save a theme dto and return it', async () => {
            const themeDto: ThemeDTO = generateMockThemeDto()
            const result = await themeRepo.saveTheme(themeDto)
            expect(result).to.deep.contain(themeDto)
            themeId = themeDto.id
        })
    })

    describe('Read Theme', () => {
        it('should return a theme dto', async () => {
            const themeDto = { ...generateMockThemeDto(), id: themeId }
            const themeProps: Partial<ThemeDTO> = {
                id: themeDto.id,
                name: themeDto.name,
                description: themeDto.description,
                outcomes: themeDto.outcomes,
            }
            const result = await themeRepo.readTheme(themeDto.id)
            expect(result).to.deep.contain(themeProps)
        })
    })

    describe('Update Theme', () => {
        it('should update a theme dto and return it', async () => {
            const themeDto: ThemeDTO = {
                ...generateMockThemeDto(),
                outcomes: ['New Outcome'],
                id: themeId,
            }
            const result = await themeRepo.updateTheme(themeDto)
            expect(result).to.deep.contain(themeDto)
        })
    })
})
