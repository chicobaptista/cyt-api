import chai, { expect } from 'chai'
import {
    generateMockThemeDto,
    generateMockThemeProps,
} from './theme.utils.spec'
import { Theme } from '@theme/entities/theme'
import { ThemeProps } from '@theme/entities/theme.interface'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

describe('Theme Entity', () => {
    describe('New Theme', () => {
        describe('on invalid props', () => {
            const props: ThemeProps = {
                name: false,
                description: 0,
                outcomes: ['test', NaN],
            } as unknown as ThemeProps

            it('should throw a validation Error', () => {
                expect(() => new Theme(props)).to.throw(
                    'Invalid create new Theme props',
                )
            })
        })
        describe('On valid props', () => {
            const props: ThemeProps = generateMockThemeProps()
            it('should be created properly', () => {
                const theme = new Theme(props)

                expect(theme.name).to.eq(
                    props.name,
                    'should have the given name',
                )
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
    })

    describe('Updated Theme', () => {
        describe('on invalid props', () => {
            const oldProps: ThemeProps = generateMockThemeProps()
            const theme = new Theme(oldProps)
            const newProps: ThemeProps = {
                name: false,
                description: 0,
                outcomes: ['test', NaN],
            } as unknown as ThemeProps

            it('should throw a validation Error', () => {
                expect(() => theme.update(newProps)).to.throw(
                    'Invalid update Theme props',
                )
            })
        })
        describe('On valid props', () => {
            const oldProps: ThemeProps = generateMockThemeProps()
            describe('updating outcomes', () => {
                const theme = new Theme(oldProps)

                const newProps: Partial<ThemeProps> = {
                    outcomes: ['New Test Outcome 1', 'New Test Outcome 2'],
                }
                it('should update properly', async () => {
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

                        expect(theme.createdAt, 'should have a createdAt date')
                            .to.be.ok
                        expect(theme.updatedAt, 'should have a updatedAt date')
                            .to.be.ok
                        expect(
                            theme.updatedAt,
                            'should have updatedAt date later than createdAt',
                        ).to.be.greaterThan(theme.createdAt)
                    }, 10)
                })
            })
            describe('updating name and description', () => {
                const theme = new Theme(oldProps)

                const newProps: Partial<ThemeProps> = {
                    name: 'New Test Theme',
                    description: 'New Test description',
                }
                it('should update properly', async () => {
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

                        expect(theme.createdAt, 'should have a createdAt date')
                            .to.be.ok
                        expect(theme.updatedAt, 'should have a updatedAt date')
                            .to.be.ok
                        expect(
                            theme.updatedAt,
                            'should have updatedAt date later than createdAt',
                        ).to.be.greaterThan(theme.createdAt)
                    }, 10)
                })
            })
        })
    })

    describe('DTO Utils', () => {
        describe('From DTO', () => {
            it('should return a Theme Entity from a ThemeDTO', () => {
                const themeDto = generateMockThemeDto()
                const theme = Theme.fromDTO(themeDto)

                expect(theme, 'should be instance of Theme').to.be.instanceOf(
                    Theme,
                )
                expect(theme, 'should have the original dto data').to.contain(
                    themeDto,
                )
            })
        })

        describe('To DTO', () => {
            it('should return a ThemeDTO from a Theme Entity', () => {
                const themeProps = generateMockThemeProps()
                const theme = new Theme(themeProps)
                const themeDto = theme.toDto()
                expect(themeDto, 'should have id property').to.haveOwnProperty(
                    'id',
                )
                expect(
                    themeDto,
                    'should have createdAt property',
                ).to.haveOwnProperty('createdAt')
                expect(
                    themeDto,
                    'should have updatedAt property',
                ).to.haveOwnProperty('updatedAt')
                expect(
                    themeDto,
                    'should contain original props data',
                ).to.contain(themeProps)
            })
        })
    })
})
