import { Theme, ThemeProps } from './theme'
import { expect } from 'chai'

describe('Theme Entity', () => {
    describe('New Theme', () => {
        it('should be created properly', () => {
            const props: ThemeProps = generateMockThemeProps()
            const theme = new Theme(props)

            expect(theme.name).to.eq(props.name, 'should have the given name')
            expect(theme.description).to.eq(
                props.description,
                'should have the given description',
            )
            expect(theme.outcomes).to.deep.eq(props.outcomes)
            expect(theme.createdAt, 'should have a createdAt date').to.be.ok
            expect(theme.updatedAt, 'should have a updatedAt date').to.be.ok
            expect(
                theme.updatedAt,
                'should have the same updatedAt date as createdAt',
            ).to.deep.equal(theme.createdAt)
        })
    })

    describe('Updated Theme', () => {
        describe('updating outcomes', () => {
            it('should update properly', async () => {
                const oldProps: ThemeProps = generateMockThemeProps()
                const theme = new Theme(oldProps)

                const newProps: Partial<ThemeProps> = {
                    outcomes: ['New Test Outcome 1', 'New Test Outcome 2'],
                }
                await setTimeout(() => {
                    theme.update(newProps)

                    expect(theme.name).to.eq(
                        oldProps.name,
                        'should not have the updated name',
                    )
                    expect(theme.description).to.eq(
                        oldProps.description,
                        'should not have the updated description',
                    )
                    expect(theme.outcomes).to.deep.eq(
                        newProps.outcomes,
                        'should have updated the outcomes',
                    )

                    expect(theme.createdAt, 'should have a createdAt date').to
                        .be.ok
                    expect(theme.updatedAt, 'should have a updatedAt date').to
                        .be.ok
                    expect(
                        theme.updatedAt,
                        'should have updatedAt date later than createdAt',
                    ).to.be.greaterThan(theme.createdAt)
                }, 10)
            })
        })
        describe('updating name and description', () => {
            it('should update properly', async () => {
                const oldProps: ThemeProps = generateMockThemeProps()
                const theme = new Theme(oldProps)

                const newProps: Partial<ThemeProps> = {
                    name: 'New Test Theme',
                    description: 'New Test description',
                }
                await setTimeout(() => {
                    theme.update(newProps)

                    expect(theme.name).to.eq(
                        newProps.name,
                        'should have the updated name',
                    )
                    expect(theme.description).to.eq(
                        newProps.description,
                        'should have the updated description',
                    )
                    expect(theme.outcomes).to.deep.eq(
                        oldProps.outcomes,
                        'should not have updated the outcomes',
                    )

                    expect(theme.createdAt, 'should have a createdAt date').to
                        .be.ok
                    expect(theme.updatedAt, 'should have a updatedAt date').to
                        .be.ok
                    expect(
                        theme.updatedAt,
                        'should have updatedAt date later than createdAt',
                    ).to.be.greaterThan(theme.createdAt)
                }, 10)
            })
        })
    })
})

function generateMockThemeProps(): ThemeProps {
    return {
        name: 'Test Theme',
        description: 'Test description',
        outcomes: ['Test Outcome 1', 'Test Outcome 2'],
    }
}
