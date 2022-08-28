export function isString(subject: any): boolean {
    return typeof subject === 'string' || subject instanceof String
}
