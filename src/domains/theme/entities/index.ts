import { Theme, ThemeProps } from './theme'
import { CThemeValidator } from './theme.validator'

const themeValidator = new CThemeValidator()

function makeTheme(props: ThemeProps): Theme {
    return new Theme(themeValidator, props)
}

export default Object.freeze({ makeTheme })
