/* eslint-disable no-unused-vars */
import { ThemeDTO, ThemeProps } from '@theme/entities/theme.interface'

export interface CreateTheme {
    /**
     * Creates a new {@link ThemeDTO} entity from the given props and saves its DTO to the ThemeRepository.
     *
     * @param  {ThemeProps} props
     * @returns Promise<ThemeDTO>
     * @fulfill {@link ThemeDTO}
     */
    create(props: ThemeProps): Promise<ThemeDTO>
}

export interface ReadTheme {
    /**
     * Retrieves a new {@link ThemeDTO} entity from the ThemeRepository.
     *
     * @param  {ThemeProps} props
     * @returns Promise<ThemeDTO>
     * @fulfill {@link ThemeDTO}
     */
    read(themeId: string): Promise<ThemeDTO>
}

export interface UpdateTheme {
    /**
     * Updates an existing {@link ThemeDTO} entity from the given props and saves its DTO to the ThemeRepository.
     *
     * @param  {string} themeId
     * @param  {Partial<ThemeProps>} changes
     * @returns Promise<ThemeDTO>
     * @fulfill {@link ThemeDTO}
     */
    update(themeId: string, changes: Partial<ThemeProps>): Promise<ThemeDTO>
}
