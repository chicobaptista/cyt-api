import chai, { expect } from 'chai'
import {
    makePermissiveThemeValidator,
    makeRestrictiveCreateThemeValidator,
    makeRestrictiveUpdateThemeValidator,
} from './theme.validator.utils.spec'
import { CTheme } from '@theme/entities/theme'
import { ThemeProps } from '@theme/entities/theme.interface'
import { ThemeValidator } from '@theme/entities/theme.validator.interface'
import { generateMockThemeProps } from './theme.utils.spec'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

describe('CTheme Entity', () => {
    describe('New Theme', () => {
        describe('on invalid props', () => {
            const themeValidator: ThemeValidator =
                makeRestrictiveCreateThemeValidator()
            const props: ThemeProps = {
                name: false,
                description: 0,
                outcomes: ['test', NaN],
            } as unknown as ThemeProps

            it('should throw a validation Error', () => {
                expect(() => new CTheme(themeValidator, props)).to.throw(
                    'Invalid create new Theme props',
                )
            })
        })
        describe('On valid props', () => {
            const themeValidator: ThemeValidator =
                makePermissiveThemeValidator()
            const props: ThemeProps = generateMockThemeProps()
            it('should be created properly', () => {
                const theme = new CTheme(themeValidator, props)

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
            const themeValidator: ThemeValidator =
                makeRestrictiveUpdateThemeValidator()
            const oldProps: ThemeProps = generateMockThemeProps()
            const theme = new CTheme(themeValidator, oldProps)
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
            const themeValidator = makePermissiveThemeValidator()
            const oldProps: ThemeProps = generateMockThemeProps()
            describe('updating outcomes', () => {
                const theme = new CTheme(themeValidator, oldProps)

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
                const theme = new CTheme(themeValidator, oldProps)

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
})
