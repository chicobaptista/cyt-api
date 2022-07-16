/* eslint-disable no-unused-vars */
import { ThemeDTO, ThemeProps } from '@theme/entities/theme.interface'

export interface CreateTheme {
    /**
     * Creates a new {@link Theme} entity from the given props and saves its DTO to the ThemeRepository.
     *
     * @param  {ThemeProps} props
     * @returns Promise<ThemeDTO>
     * @fulfill {@link ThemeDTO}
     */
    create(props: ThemeProps): Promise<ThemeDTO>
}
