import { Theme, ThemeProps } from '@theme/entities/theme.interface'
import { CreateTheme } from './use-cases.interface'
import { CreateThemeRepository } from '@theme/repositories/theme.repository.interface'
import themeFactory from '@theme/entities'

export class CCreateTheme implements CreateTheme {
    private themeRepository: CreateThemeRepository
    constructor(themeRepo: CreateThemeRepository) {
        this.themeRepository = themeRepo
    }

    public async create(props: ThemeProps): Promise<Theme> {
        const theme = themeFactory.makeTheme(props)
        await this.themeRepository.saveTheme(theme)
        return theme
    }
}
