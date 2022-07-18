import { PostThemeController } from './post-theme'
import themeUseCaseFactory from '@theme/use-cases/index'

function makePostTheme() {
    const createThemeUC = themeUseCaseFactory.makeCreateTheme()

    return new PostThemeController(createThemeUC)
}

export default Object.freeze({ makePostTheme })
