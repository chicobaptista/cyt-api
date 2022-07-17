/* eslint-disable no-unused-vars */

import { BaseDTO } from '@shared/entities/entity.interface'

/**
 * The types prop for {@link Theme}.
 */
export interface ThemeProps {
    name: string
    description: string
    outcomes: string[]
}

export interface ThemeDTO extends BaseDTO {
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
