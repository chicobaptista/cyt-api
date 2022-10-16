import { JournalEntriesSetProps } from './journal-entry.interface'

export function generateMockJournalEntriesSetProps(): JournalEntriesSetProps {
    return {
        title: 'Test Entry',
        date: new Date(),
        smallEntryStart: 'Test Small Entry 1',
        smallEntryEnd: 'Test Small Entry 2',
        largeEntry: 'Test Large Entrya',
        focusEntry: 'Test Focus Entry',
    }
}
