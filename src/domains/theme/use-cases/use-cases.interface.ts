/* eslint-disable no-unused-vars */
import { Theme, ThemeProps } from '@theme/entities/theme.interface'

export interface CreateTheme {
    /**
     * Creates a new {@link Theme} entity from the given props and saves it to the ThemeRepository.
     *
     * @param  {ThemeProps} props
     * @returns Promise<Theme>
     * @fulfill {@link Theme}
     */
    create(props: ThemeProps): Promise<Theme>
}
