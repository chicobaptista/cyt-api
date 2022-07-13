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
        this.id = id
        this._name = props.name
        this._description = props.description
        this._outcomes = props.outcomes
        this._createdAt = new Date()
        this._updatedAt = new Date()
    }
    /**
     * Updates the current Theme with the given props and sets a new updatedAt date.
     * @param  {Partial<ThemeProps>} props
     */
    update(props: Partial<ThemeProps>) {
        if (props.name) this._name = props.name
        if (props.description) this._description = props.description
        if (props.outcomes) this._outcomes = props.outcomes
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
}
