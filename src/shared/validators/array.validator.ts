/* eslint-disable no-unused-vars */
export function isArray(subject: any): boolean {
    return Array.isArray(subject)
}

export function isArrayOf(
    subjectArray: any,
    validatorFn: (e: any) => boolean,
): boolean {
    return (
        isArray(subjectArray) && subjectArray.every((e: any) => validatorFn(e))
    )
}
