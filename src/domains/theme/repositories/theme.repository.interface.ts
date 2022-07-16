/* eslint-disable no-unused-vars */
import { ThemeDTO, ThemeProps } from '@theme/entities/theme.interface'

export interface CreateThemeRepository {
    /**
     * Saves a {@link Theme} entity generated from a {@link ThemeProps} param to a persistence driver.
     *
     * @param  {ThemeProps} theme
     * @returns Promise
     * @fulfill {@link ThemeDTO}
     */
    saveTheme(theme: ThemeDTO): Promise<ThemeDTO>
}

export interface ReadThemeRepository {
    /**
     * Retrieves a {@link ThemeDTO} from a persistence driver.
     *
     * @param  {string} themeId
     * @returns Promise
     * @fulfill {@link ThemeDTO}
     */
    readTheme(themeId: ThemeDTO['id']): Promise<ThemeDTO>
}
