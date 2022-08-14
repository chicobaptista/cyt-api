import {
    MakeThemeDTO,
    ThemeDTO,
    ThemeProps,
} from '@theme/entities/theme.interface'
import {
    PropValidationError,
    PropValidationResult,
} from '@shared/prop-validation'
import { v4 } from 'uuid'

export class Theme {
    readonly id: string
    private _name: string
    private _description: string
    private _outcomes: string[]
    private _createdAt: Date
    private _updatedAt: Date
    /**
     * Represents the Theme Entity.
     * Implements the {@link Theme} interface.
     *
     * @param  {MakeThemeDTO} props
     * @param  {string=uuid.v4} id
     */
    constructor(props: MakeThemeDTO, id: string = v4()) {
        const timestamp = new Date()
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
        this._createdAt = props.createdAt ?? timestamp
        this._updatedAt = props.updatedAt ?? timestamp
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
     * Updates the current Theme with the given props, sets a new updatedAt date and returns the updated Entity.
     * @param  {Partial<ThemeProps>} props
     */
    update(props: Partial<ThemeProps>): void {
        const { valid, errors } = this.validateUpdateProps(props)
        if (!valid)
            throw new PropValidationError('Invalid update Theme props', errors)

        const { name, description, outcomes } = props
        if (name) this._name = name
        if (description) this._description = description
        if (outcomes) this._outcomes = outcomes
        this._updatedAt = new Date()
    }

    toDto(): ThemeDTO {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            outcomes: this.outcomes,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        }
    }

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
