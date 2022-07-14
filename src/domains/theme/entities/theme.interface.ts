/* eslint-disable no-unused-vars */
/**
 * The types prop for {@link Theme}.
 */
export interface ThemeProps {
    name: string
    description: string
    outcomes: string[]
}

/**
 * The interface for the Theme Entity.
 */
export interface Theme {
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
    /**
     * @param  {Partial<ThemeProps>} props
     * @returns void
     */
    update(props: Partial<ThemeProps>): void
}
