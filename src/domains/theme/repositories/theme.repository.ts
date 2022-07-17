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
    private collectionName = 'themes'

    constructor(dbDriver: DbDriver<ThemeDTO>) {
        this.dbDriver = dbDriver
    }

    async readTheme(themeId: string): Promise<ThemeDTO> {
        const found = await this.dbDriver
            .collection(this.collectionName)
            .findOne({ id: themeId })
        return found
    }

    async saveTheme(theme: ThemeDTO): Promise<ThemeDTO> {
        const createdTheme = await this.dbDriver
            .collection(this.collectionName)
            .insertOne(theme)
        return createdTheme
    }

    async updateTheme(theme: ThemeDTO): Promise<ThemeDTO> {
        const createdTheme = await this.dbDriver
            .collection(this.collectionName)
            .updateOne(theme)
        return createdTheme
    }
}
