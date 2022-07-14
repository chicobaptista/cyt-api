import { Theme, ThemeProps } from '@theme/entities/theme.interface'
import { PropValidationError } from '@shared/prop-validation'
import { ThemeValidator } from '@theme/entities/theme.validator.interface'
import { v4 } from 'uuid'

export class CTheme implements Theme {
    private validator: ThemeValidator
    readonly id: string
    private _name: string
    private _description: string
    private _outcomes: string[]
    readonly _createdAt: Date
    private _updatedAt: Date
    /**
     * Represents the Theme Entity.
     * Implements the {@link Theme} interface.
     *
     * @param  {ThemeProps} props
     * @param  {string=uuid.v4} id
     */
    constructor(
        validator: ThemeValidator,
        props: ThemeProps,
        id: string = v4(),
    ) {
        this.validator = validator
        const { valid, errors } = this.validator.validateCreateProps(props)
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
    update(props: Partial<ThemeProps>): void {
        const { valid, errors } = this.validator.validateUpdateProps(props)
        if (!valid)
            throw new PropValidationError('Invalid update Theme props', errors)

        const { name, description, outcomes } = props
        if (name) this._name = name
        if (description) this._description = description
        if (outcomes) this._outcomes = outcomes
        this._updatedAt = new Date()
    }
}
