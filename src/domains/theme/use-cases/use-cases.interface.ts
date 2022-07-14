/* eslint-disable no-unused-vars */
import { Theme, ThemeProps } from '@theme/entities/theme.interface'

export interface CreateTheme {
    create(props: ThemeProps): Promise<Theme>
}
