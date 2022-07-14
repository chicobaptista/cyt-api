import { Theme, ThemeProps } from '@theme/entities/theme.interface'
import { CTheme } from '@theme/entities/theme'
import { CThemeValidator } from '@theme/entities/theme.validator'

const themeValidator = new CThemeValidator()

function makeTheme(props: ThemeProps): Theme {
    return new CTheme(themeValidator, props)
}

export default Object.freeze({ makeTheme })
