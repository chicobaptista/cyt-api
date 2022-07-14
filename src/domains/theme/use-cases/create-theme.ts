import { Theme, ThemeProps } from '@theme/entities/theme.interface'
import { CreateTheme } from './use-cases.interface'
import { CreateThemeRepository } from '@theme/repositories/theme.repository.interface'
import themeFactory from '@theme/entities'

export class CCreateTheme implements CreateTheme {
    private themeRepository: CreateThemeRepository
    /**
     * Represents the Create Theme use case.
     * Implements the {@link CreateTheme} interface.
     *
     * @param  {CreateThemeRepository} themeRepo
     */
    constructor(themeRepo: CreateThemeRepository) {
        this.themeRepository = themeRepo
    }

    /**
     * Creates a new {@link Theme} entity with the given props and saves it to the ThemeRepository.
     *
     * @param  {ThemeProps} props
     * @returns Promise.<Theme>
     * @fulfill {@link Theme}
     */
    public async create(props: ThemeProps): Promise<Theme> {
        const theme = themeFactory.makeTheme(props)
        await this.themeRepository.saveTheme(theme)
        return theme
    }
}
