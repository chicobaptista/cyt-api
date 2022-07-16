import { Theme, ThemeDTO, ThemeProps } from '@theme/entities/theme.interface'
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
     * Creates a new {@link Theme} entity with the given props and saves its {@link ThemeDTO} to the ThemeRepository.
     *
     * @param  {ThemeProps} props
     * @returns Promise.<Theme>
     * @fulfill {@link ThemeDTO}
     */
    public async create(props: ThemeProps): Promise<ThemeDTO> {
        const theme: Theme = themeFactory.makeTheme(props)
        const result: ThemeDTO = await this.themeRepository.saveTheme(theme)
        return result
    }
}
