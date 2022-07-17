import { CreateTheme, ReadTheme, UpdateTheme } from './use-cases.interface'
import { CCreateTheme } from './create-theme'
import { CReadTheme } from './read-theme'
import { CUpdateTheme } from './update-theme'
import { ThemeRepository } from '@theme/repositories/theme.repository.interface'
import themeFactory from '@theme/repositories'
const themeRepo: ThemeRepository = themeFactory.makeThemeRepository()

function makeReadTheme(): ReadTheme {
    return new CReadTheme(themeRepo)
}

function makeCreateTheme(): CreateTheme {
    return new CCreateTheme(themeRepo)
}

function makeUpdateTheme(): UpdateTheme {
    return new CUpdateTheme(themeRepo)
}

export default Object.freeze({
    makeReadTheme,
    makeCreateTheme,
    makeUpdateTheme,
})
