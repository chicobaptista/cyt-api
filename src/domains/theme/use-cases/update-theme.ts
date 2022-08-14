import { ThemeDTO, ThemeProps } from '@theme/entities/theme.interface'
import { Theme } from '@theme/entities/theme'
import { UpdateTheme } from './use-cases.interface'
import { UpdateThemeRepository } from '@theme/repositories/theme.repository.interface'

export class CUpdateTheme implements UpdateTheme {
    private updateRepository: UpdateThemeRepository

    constructor(updateRepo: UpdateThemeRepository) {
        this.updateRepository = updateRepo
    }

    async update(
        themeId: string,
        changes: Partial<ThemeProps>,
    ): Promise<ThemeDTO> {
        const found = await this.updateRepository.readTheme(themeId)
        if (!found) throw new Error(`Theme ${themeId} not found`)
        const theme: Theme = new Theme(found, found.id)
        theme.update(changes)
        const result = await this.updateRepository.updateTheme(theme.toDto())
        return result
    }
}
