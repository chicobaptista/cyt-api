export interface PropValidationResult {
    valid: boolean
    errors: Error[]
}

export class PropValidationError extends Error {
    errors: Error[]
    constructor(errorMsg: string, errors: Error[]) {
        super(errorMsg)
        this.errors = errors
    }
}
