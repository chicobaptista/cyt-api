/* eslint-disable no-unused-vars */
import { Theme } from '@theme/entities/theme.interface'

export interface CreateThemeRepository {
    /**
     * Saves a {@link Theme} entity to a persistence driver.
     *
     * @param  {Theme} theme
     * @returns Promise
     * @fulfill {@link Theme}
     */
    saveTheme(theme: Theme): Promise<Theme>
}
