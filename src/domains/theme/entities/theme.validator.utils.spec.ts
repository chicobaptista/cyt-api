import { ThemeValidator } from './theme.validator.interface'
import sinon from 'sinon'

export function makePermissiveThemeValidator(): ThemeValidator {
    return {
        validateCreateProps: sinon.stub().returns({
            valid: true,
            errors: [],
        }),
        validateUpdateProps: sinon.stub().returns({
            valid: true,
            errors: [],
        }),
    }
}

export function makeRestrictiveCreateThemeValidator(): ThemeValidator {
    return {
        validateCreateProps: sinon.stub().returns({
            valid: false,
            errors: [],
        }),
        validateUpdateProps: sinon.stub().returns({
            valid: true,
            errors: [],
        }),
    }
}

export function makeRestrictiveUpdateThemeValidator(): ThemeValidator {
    return {
        validateCreateProps: sinon.stub().returns({
            valid: true,
            errors: [],
        }),
        validateUpdateProps: sinon.stub().returns({
            valid: false,
            errors: [],
        }),
    }
}
