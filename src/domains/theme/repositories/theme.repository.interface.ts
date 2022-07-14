/* eslint-disable no-unused-vars */
import { Theme } from '@theme/entities/theme.interface'

export interface CreateThemeRepository {
    saveTheme(theme: Theme): Promise<Theme>
}
