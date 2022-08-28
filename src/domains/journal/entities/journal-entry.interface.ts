import { BaseDTO } from '@shared/entities/entity.interface'

export interface JournalEntryDTO extends BaseDTO {
    /* @property {string} id */
    id: string
    /* @property {string} name */
    title: string
    /* @property {Date} date */
    date: Date
    /* @property {string} smallEntryStart */
    smallEntryStart: string
    /* @property {string} smallEntryEnd */
    smallEntryEnd: string
    /* @property {string} largeEntry */
    largeEntry: string
    /* @property {string} focusEntry */
    focusEntry: string
    /* @property {Date} createdAt */
    createdAt: Date
    /* @property {Date} updatedAt */
    updatedAt: Date
}

export interface JournalEntryProps {
    title: string
    date: Date
    smallEntryStart: string
    smallEntryEnd: string
    largeEntry: string
    focusEntry: string
}

export type MakeJournalEntryDTO = Partial<JournalEntryDTO> & JournalEntryProps
