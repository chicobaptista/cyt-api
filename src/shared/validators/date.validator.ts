export function isDate(subject: any) {
    return !isNaN(subject) && subject instanceof Date
}
