export function isString(subject: any): boolean {
    return typeof subject === 'string' || subject instanceof String
}

export function isNonEmptyString(subject: any): boolean {
    const emptyStrings = ['', 'null', 'undefined', 'false']
    return (
        isString(subject) && emptyStrings.findIndex((e) => e === subject) === -1
    )
}

export function isUuid(subject: any): boolean {
    const regexExp =
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi

    return isString(subject) && regexExp.test(subject)
}
