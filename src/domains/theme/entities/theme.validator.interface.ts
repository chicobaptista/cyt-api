import { PropValidationResult } from '../../../shared/prop-validation'

/* eslint-disable no-unused-vars */
export interface ThemeValidator {
    /**
     * Validates all props for creating a new {@link Theme}
     * @param  {any} props
     * @returns PropValidationResult {@link PropValidationResult}
     */
    validateCreateProps(props: any): PropValidationResult

    /**
     * Validates partial props for updating a {@link Theme}
     * @param  {any} props
     * @returns PropValidationResult {@link PropValidationResult}
     */
    validateUpdateProps(props: any): PropValidationResult
}
