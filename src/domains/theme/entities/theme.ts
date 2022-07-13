import { v4 } from 'uuid'

export interface ThemeProps {
    name: string
    description: string
    outcomes: string[]
}
/**
 *
 */
export class Theme {
    readonly id: string
    private _name: string
    private _description: string
    private _outcomes: string[]
    readonly createdAt: Date
    private _updatedAt: Date

    constructor(props: ThemeProps, id: string = v4()) {
        this.id = id
        this._name = props.name
        this._description = props.description
        this._outcomes = props.outcomes
        this.createdAt = new Date()
        this._updatedAt = new Date()
    }

    update(props: Partial<ThemeProps>) {
        if (props.name) this._name = props.name
        if (props.description) this._description = props.description
        if (props.outcomes) this._outcomes = props.outcomes
        this._updatedAt = new Date()
    }

    get updatedAt() {
        return this._updatedAt
    }

    get name() {
        return this._name
    }

    get description() {
        return this._description
    }

    get outcomes() {
        return this._outcomes
    }
}
