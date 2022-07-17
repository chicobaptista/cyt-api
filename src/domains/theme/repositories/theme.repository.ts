/* eslint-disable no-unused-vars */
import {
    CreateThemeRepository,
    ReadThemeRepository,
    UpdateThemeRepository,
} from './theme.repository.interface'
import { DbDriver } from '@shared/drivers/db.driver.interface'
import { ThemeDTO } from '@theme/entities/theme.interface'

export class CThemeRepository
    implements
        ReadThemeRepository,
        CreateThemeRepository,
        UpdateThemeRepository
{
    private dbDriver: DbDriver<ThemeDTO>

    constructor(dbDriver: DbDriver<ThemeDTO>) {
        this.dbDriver = dbDriver
    }

    async readTheme(themeId: string): Promise<ThemeDTO> {
        const found = await this.dbDriver.findOne(themeId)
        return found
    }

    async saveTheme(theme: ThemeDTO): Promise<ThemeDTO> {
        const createdTheme = await this.dbDriver.save(theme)
        return createdTheme
    }

    async updateTheme(theme: ThemeDTO): Promise<ThemeDTO> {
        const createdTheme = await this.dbDriver.update(theme)
        return createdTheme
    }
}
