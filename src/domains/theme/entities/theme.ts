import {
    PropValidationError,
    PropValidationResult,
} from '../../../shared/prop-validation'
import { v4 } from 'uuid'

/**
 * The types prop for {@link Theme}.
 */
export interface ThemeProps {
    name: string
    description: string
    outcomes: string[]
}

export class Theme {
    readonly id: string
    private _name: string
    private _description: string
    private _outcomes: string[]
    readonly _createdAt: Date
    private _updatedAt: Date
    /**
     * Represents the Theme Entity.
     *
     * @param  {ThemeProps} props
     * @param  {string=uuid.v4} id
     */
    constructor(props: ThemeProps, id: string = v4()) {
        const { valid, errors } = this.validateCreateProps(props)
        if (!valid)
            throw new PropValidationError(
                'Invalid create new Theme props',
                errors,
            )

        this.id = id
        const { name, description, outcomes } = props
        this._name = name
        this._description = description
        this._outcomes = outcomes
        this._createdAt = new Date()
        this._updatedAt = new Date()
    }

    /**
     * @returns Date
     */
    get createdAt(): Date {
        return this._createdAt
    }

    /**
     * @returns Date
     */
    get updatedAt(): Date {
        return this._updatedAt
    }
    /**
     * @returns string
     */
    get name(): string {
        return this._name
    }
    /**
     * @returns string
     */
    get description(): string {
        return this._description
    }
    /**
     * @returns string
     */
    get outcomes(): string[] {
        return this._outcomes
    }

    /**
     * Updates the current Theme with the given props and sets a new updatedAt date.
     * @param  {Partial<ThemeProps>} props
     */
    update(props: Partial<ThemeProps>) {
        const { valid, errors } = this.validateUpdateProps(props)
        if (!valid)
            throw new PropValidationError('Invalid update Theme props', errors)

        const { name, description, outcomes } = props
        if (name) this._name = name
        if (description) this._description = description
        if (outcomes) this._outcomes = outcomes
        this._updatedAt = new Date()
    }

    private validateNameProp(nameProp: any): Error | void {
        if (typeof nameProp !== 'string')
            return new Error('Name should be a string')
    }

    private validateDescriptionProp(descriptionProp: any): Error | void {
        if (typeof descriptionProp !== 'string')
            return new Error('Description should be a string')
    }

    private validateOutcomesProp(outcomes: any): Error | void {
        if (
            !Array.isArray(outcomes) ||
            outcomes.some((o) => typeof o !== 'string')
        )
            return new Error('Outcomes must be an array of strings')
    }

    private validateCreateProps(props: any): PropValidationResult {
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

    private validateUpdateProps(props: any): PropValidationResult {
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
