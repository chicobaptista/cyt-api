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
        const { id, name, description, outcomes, createdAt, updatedAt } =
            await this.dbDriver.findOne(themeId)
        return { id, name, description, outcomes, createdAt, updatedAt }
    }

    async saveTheme(theme: ThemeDTO): Promise<ThemeDTO> {
        const { id, name, description, outcomes, createdAt, updatedAt } =
            await this.dbDriver.save(theme)
        return { id, name, description, outcomes, createdAt, updatedAt }
    }

    async updateTheme(theme: ThemeDTO): Promise<ThemeDTO> {
        const { id, name, description, outcomes, createdAt, updatedAt } =
            await this.dbDriver.update(theme)
        return { id, name, description, outcomes, createdAt, updatedAt }
    }
}
