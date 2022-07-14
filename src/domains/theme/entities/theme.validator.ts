import { PropValidationResult } from '../../../shared/prop-validation'
import { ThemeValidator } from './theme.validator.interface'

export class CThemeValidator implements ThemeValidator {
    /**
     * @param  {any} nameProp
     * @returns {Error|void} If name is not a string returns an Error.
     */
    private validateNameProp(nameProp: any): Error | void {
        if (typeof nameProp !== 'string')
            return new Error('Name should be a string')
    }

    /**
     * @param  {any} descriptionProp
     * @returns {Error|void} If description is not a string returns an Error.
     */
    private validateDescriptionProp(descriptionProp: any): Error | void {
        if (typeof descriptionProp !== 'string')
            return new Error('Description should be a string')
    }

    /**
     * @param  {any} outcomesProp
     * @returns {Error|void} If outcomes is not an array of strings returns an Error.
     */
    private validateOutcomesProp(outcomesProp: any): Error | void {
        if (
            !Array.isArray(outcomesProp) ||
            outcomesProp.some((o) => typeof o !== 'string')
        )
            return new Error('Outcomes must be an array of strings')
    }

    validateCreateProps(props: any): PropValidationResult {
        const errors = []
        const { name, description, outcomes } = props

        const nameValidationError = this.validateNameProp(name)
        if (nameValidationError) errors.push(nameValidationError)

        const descriptionValidationError =
            this.validateDescriptionProp(description)
        if (descriptionValidationError) errors.push(descriptionValidationError)

        const outcomesValidationError = this.validateOutcomesProp(outcomes)
        if (outcomesValidationError) errors.push(outcomesValidationError)

        return {
            valid: errors.length === 0,
            errors,
        }
    }

    validateUpdateProps(props: any): PropValidationResult {
        const errors = []
        const { name, description, outcomes } = props

        const nameValidationError = this.validateNameProp(name)
        if (name !== undefined && nameValidationError)
            errors.push(nameValidationError)

        const descriptionValidationError =
            this.validateDescriptionProp(description)
        if (description !== undefined && descriptionValidationError)
            errors.push(descriptionValidationError)

        const outcomesValidationError = this.validateOutcomesProp(outcomes)
        if (outcomes !== undefined && outcomesValidationError)
            errors.push(outcomesValidationError)

        return {
            valid: errors.length === 0,
            errors,
        }
    }
}
