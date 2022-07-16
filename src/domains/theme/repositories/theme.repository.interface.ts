/* eslint-disable no-unused-vars */
import { ThemeDTO } from '@theme/entities/theme.interface'

export interface CreateThemeRepository {
    /**
     * Saves a {@link ThemeDTO} entity to a persistence driver.
     *
     * @param  {ThemeDTO} theme
     * @returns Promise
     * @fulfill {@link ThemeDTO}
     */
    saveTheme(theme: ThemeDTO): Promise<ThemeDTO>
}

export interface ReadThemeRepository {
    readTheme(themeId: ThemeDTO['id']): Promise<ThemeDTO>
}