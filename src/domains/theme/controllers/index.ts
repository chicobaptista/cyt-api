import { GetThemeByIDController } from './get-theme-id'
import { PatchThemeIdController } from './patch-theme-id'
import { PostThemeController } from './post-theme'
import themeUseCaseFactory from '@theme/use-cases/index'

function makePostTheme() {
    const createThemeUC = themeUseCaseFactory.makeCreateTheme()

    return new PostThemeController(createThemeUC)
}

function makeGetIdTheme() {
    const readThemeUC = themeUseCaseFactory.makeReadTheme()

    return new GetThemeByIDController(readThemeUC)
}

function makePatchIdTheme() {
    const updateThemeUC = themeUseCaseFactory.makeUpdateTheme()

    return new PatchThemeIdController(updateThemeUC)
}

export default Object.freeze({
    makePostTheme,
    makeGetIdTheme,
    makePatchIdTheme,
})
