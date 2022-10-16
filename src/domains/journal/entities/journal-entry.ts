import {
    PropValidationError,
    PropValidationResult,
} from '@shared/prop-validation'
import { isDate } from '@shared/validators/date.validator'
import { isNonEmptyString } from '@shared/validators/string.validator'
import { v4 } from 'uuid'

export class JournalDailyEntriesSet {
    readonly id: string
    private _title: string
    private _date: Date
    private _smallEntryStart: string
    private _smallEntryEnd: string
    private _largeEntry: string
    private _focusEntry: string
    private _createdAt: Date
    private _updatedAt: Date

    constructor(props, id: string = v4()) {
        const timestamp = new Date()
        const { valid, errors } = this.validateCreateProps(props)
        if (!valid)
            throw new PropValidationError(
                'Invalid create new JournalEntry props',
                errors,
            )

        this.id = id
        const {
            title,
            date,
            smallEntryStart,
            smallEntryEnd,
            largeEntry,
            focusEntry,
        } = props

        this._title = title
        this._date = date
        this._smallEntryStart = smallEntryStart
        this._smallEntryEnd = smallEntryEnd
        this._largeEntry = largeEntry
        this._focusEntry = focusEntry
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
    get title(): string {
        return this._title
    }

    /**
     * @returns Date
     */
    get date(): Date {
        return this._date
    }

    /**
     * @returns string
     */
    get smallEntryStart(): string {
        return this._smallEntryStart
    }

    /**
     * @returns string
     */
    get smallEntryEnd(): string {
        return this._smallEntryEnd
    }

    /**
     * @returns string
     */
    get largeEntry(): string {
        return this._largeEntry
    }

    /**
     * @returns string
     */
    get focusEntry(): string {
        return this._focusEntry
    }

    update(props: any): void {
        const { errors, valid } = this.validateUpdateProps(props)
        if (!valid)
            throw new PropValidationError(
                'Invalid update Journal Entry props',
                errors,
            )
        const {
            title,
            date,
            smallEntryStart,
            smallEntryEnd,
            largeEntry,
            focusEntry,
        } = props

        if (title) this._title = title
        if (date) this._date = date
        if (smallEntryStart) this._smallEntryStart = smallEntryStart
        if (smallEntryEnd) this._smallEntryEnd = smallEntryEnd
        if (largeEntry) this._largeEntry = largeEntry
        if (focusEntry) this._focusEntry = focusEntry
    }

    toDto() {
        return {
            id: this.id,
            title: this.title,
            date: this.date,
            smallEntryStart: this.smallEntryStart,
            smallEntryEnd: this.smallEntryEnd,
            largeEntry: this.largeEntry,
            focusEntry: this.focusEntry,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        }
    }

    private validateCreateProps(props: any): PropValidationResult {
        const errors = []
        const {
            title,
            date,
            smallEntryStart,
            smallEntryEnd,
            largeEntry,
            focusEntry,
        } = props

        const titleValidationError = this.validateTitleProp(title)
        if (titleValidationError) errors.push(titleValidationError)

        const dateValidationError = this.validateDateProp(date)
        if (dateValidationError) errors.push(dateValidationError)

        const smallEntryStartValidationError =
            this.validateEntry(smallEntryStart)
        if (smallEntryStartValidationError)
            errors.push(smallEntryStartValidationError)

        const smallEntryEndValidationError = this.validateEntry(smallEntryEnd)
        if (smallEntryEndValidationError)
            errors.push(smallEntryEndValidationError)

        const largeEntryValidationError = this.validateEntry(largeEntry)
        if (largeEntryValidationError) errors.push(largeEntryValidationError)

        const focusEntryValidationError = this.validateEntry(focusEntry)
        if (focusEntryValidationError) errors.push(focusEntryValidationError)

        return {
            valid: errors.length === 0,
            errors,
        }
    }

    private validateUpdateProps(props: any): PropValidationResult {
        const errors = []
        const {
            title,
            date,
            smallEntryStart,
            smallEntryEnd,
            largeEntry,
            focusEntry,
        } = props

        if (title !== undefined) {
            const titleValidationError = this.validateTitleProp(title)
            if (titleValidationError) errors.push(titleValidationError)
        }

        if (date !== undefined) {
            const dateValidationError = this.validateDateProp(date)
            if (dateValidationError) errors.push(dateValidationError)
        }

        if (smallEntryStart !== undefined) {
            const smallEntryStartValidationError =
                this.validateEntry(smallEntryStart)
            if (smallEntryStartValidationError)
                errors.push(smallEntryStartValidationError)
        }

        const smallEntryEndValidationError = this.validateEntry(smallEntryEnd)
        if (smallEntryEnd !== undefined && smallEntryEndValidationError)
            errors.push(smallEntryEndValidationError)

        const largeEntryValidationError = this.validateEntry(largeEntry)
        if (largeEntry !== undefined && largeEntryValidationError)
            errors.push(largeEntryValidationError)

        const focusEntryValidationError = this.validateEntry(focusEntry)
        if (focusEntry !== undefined && focusEntryValidationError)
            errors.push(focusEntryValidationError)

        return {
            valid: errors.length === 0,
            errors,
        }
    }

    private validateTitleProp(titleProp: any): Error | void {
        if (!isNonEmptyString(titleProp))
            return new Error('Title should be a string')
    }

    private validateEntry(entryProp: any): Error | void {
        if (!isNonEmptyString(entryProp))
            return new Error('Entry should be a string')
    }

    private validateDateProp(dateProp: any): Error | void {
        if (!isDate(dateProp))
            return new Error('Date should be a valid Date object')
    }
}
