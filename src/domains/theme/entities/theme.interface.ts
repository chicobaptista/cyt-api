/* eslint-disable no-unused-vars */
/**
 * The types prop for {@link Theme}.
 */
export interface ThemeProps {
    name: string
    description: string
    outcomes: string[]
}

export interface ThemeDTO {
    /* @property {string} id */
    id: string
    /* @property {string} name */
    name: string
    /* @property {string} description */
    description: string
    /* @property {string[]} outcomes */
    outcomes: string[]
    /* @property {Date} createdAt */
    createdAt: Date
    /* @property {Date} updatedAt */
    updatedAt: Date
}
