import { ReadThemeRepository } from '@theme/repositories/theme.repository.interface'
import { ThemeDTO } from '@theme/entities/theme.interface'

export class CReadTheme {
    private themeRepository: ReadThemeRepository
    constructor(themeRepo: ReadThemeRepository) {
        this.themeRepository = themeRepo
    }

    public async read(themeId: ThemeDTO['id']): Promise<ThemeDTO> {
        const foundTheme = await this.themeRepository.readTheme(themeId)
        return foundTheme
    }
}
