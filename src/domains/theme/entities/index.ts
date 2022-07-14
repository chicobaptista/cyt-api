import { Theme, ThemeProps } from './theme.interface'
import { CTheme } from './theme'
import { CThemeValidator } from './theme.validator'

const themeValidator = new CThemeValidator()

function makeTheme(props: ThemeProps): Theme {
    return new CTheme(themeValidator, props)
}

export default Object.freeze({ makeTheme })
