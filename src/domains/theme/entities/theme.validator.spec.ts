import { CThemeValidator } from './theme.validator'
import { PropValidationResult } from '../../../shared/prop-validation'
import { ThemeProps } from './theme.interface'
import { expect } from 'chai'

describe('CThemeValidator', () => {
    const themeValidator = new CThemeValidator()
    describe('validateCreateProps', () => {
        describe('On invalid props', () => {
            const props: ThemeProps = {
                name: false,
                description: 0,
                outcomes: ['test', NaN],
            } as unknown as ThemeProps

            it('should return an invalid PropValidationResult', () => {
                const validationResult: PropValidationResult =
                    themeValidator.validateCreateProps(props)
                expect(validationResult.valid).to.be.false
            })
        })
        describe('On valid props', () => {
            const props: ThemeProps = {
                name: 'Test Theme',
                description: 'Test description',
                outcomes: ['Test Outcome 1', 'Test Outcome 2'],
            }

            it('should return a valid PropValidationResult', () => {
                const validationResult: PropValidationResult =
                    themeValidator.validateCreateProps(props)
                expect(validationResult.valid).to.be.true
            })
        })
    })
    describe('validateUpdateProps', () => {
        describe('On invalid props', () => {
            const props: Partial<ThemeProps> = {
                name: false,
                description: 0,
                outcomes: ['test', NaN],
            } as unknown as ThemeProps

            it('should return an invalid PropValidationResult', () => {
                const validationResult: PropValidationResult =
                    themeValidator.validateUpdateProps(props)
                expect(validationResult.valid).to.be.false
            })
        })
        describe('On valid props', () => {
            const props: Partial<ThemeProps> = {
                outcomes: ['Test Outcome 1', 'Test Outcome 2'],
            }

            it('should return a valid PropValidationResult', () => {
                const validationResult: PropValidationResult =
                    themeValidator.validateUpdateProps(props)
                expect(validationResult.valid).to.be.true
            })
        })
    })
})
