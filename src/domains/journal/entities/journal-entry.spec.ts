import chai, { expect } from 'chai'
import { JournalDailyEntriesSet } from './journal-entry'
import { JournalEntriesSetProps } from './journal-entry.interface'
import { generateMockJournalEntriesSetProps } from './journal-entry.utils.spec'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

describe('Journal Entry Entity', () => {
    describe('New Journal Entry', () => {
        describe('on invalid props', () => {
            const props = {
                title: null,
                date: 'Invalid Date',
                smallEntryStart: 0,
                smallEntryEnd: { data: 'Test Small Entry 2' },
                largeEntry: false,
                focusEntry: ['Test Focus Entry'],
            } as unknown as JournalEntriesSetProps

            it('should throw a validation error', () => {
                expect(() => new JournalDailyEntriesSet(props)).to.throw(
                    'Invalid create new JournalEntry props',
                )
            })
        })
        describe('on valid props', () => {
            const props: JournalEntriesSetProps =
                generateMockJournalEntriesSetProps()
            it('should be created properly', () => {
                const journalEntriesSet = new JournalDailyEntriesSet(props)

                expect(journalEntriesSet.title).to.eq(
                    props.title,
                    'should have the given title',
                )
                expect(journalEntriesSet.date).to.eq(
                    props.date,
                    'should have the given date',
                )
                expect(journalEntriesSet.smallEntryStart).to.eq(
                    props.smallEntryStart,
                    'should have the given smallEntryStart',
                )

                expect(journalEntriesSet.smallEntryEnd).to.eq(
                    props.smallEntryEnd,
                    'should have the given smallEntryEnd',
                )

                expect(journalEntriesSet.largeEntry).to.eq(
                    props.largeEntry,
                    'should have the given largeEntry',
                )

                expect(journalEntriesSet.focusEntry).to.eq(
                    props.focusEntry,
                    'should have the given focusEntry',
                )
                expect(
                    journalEntriesSet.createdAt,
                    'should have a createdAt date',
                ).to.be.ok
                expect(
                    journalEntriesSet.updatedAt,
                    'should have a updatedAt date',
                ).to.be.ok
                expect(
                    journalEntriesSet.updatedAt,
                    'should have the same updatedAt date as createdAt',
                ).to.deep.equal(journalEntriesSet.createdAt)
            })
        })
    })

    describe('Update Journal Entry', () => {
        describe('on invalid props', () => {
            const oldProps: JournalEntriesSetProps =
                generateMockJournalEntriesSetProps()
            const journalEntriesSet = new JournalDailyEntriesSet(oldProps)
            const newProps: JournalEntriesSetProps = {
                title: null,
                date: 'Invalid Date',
                smallEntryStart: 0,
                smallEntryEnd: { data: 'Test Small Entry 2' },
                largeEntry: false,
                focusEntry: ['Test Focus Entry'],
            } as unknown as JournalEntriesSetProps

            it('should throw a validation Error', () => {
                expect(() => journalEntriesSet.update(newProps)).to.throw(
                    'Invalid update Journal Entry props',
                )
            })
        })
        describe('on valid props', () => {})
    })

    describe('DTO Utils', () => {
        describe('From DTO', () => {})
        describe('To DTO', () => {})
    })
})
