/* eslint-disable no-unused-vars */
import { isArray, isArrayOf } from './array.validator'
import { expect } from 'chai'

describe('isArray', () => {
    it('should return true if argument is an empty array', () => {
        expect(isArray([])).to.be.true
    })
    it('should return true if argument is an array with elements', () => {
        expect(isArray(['foo'])).to.be.true
    })
    it('should return false if argument is string literal', () => {
        expect(isArray('foo')).to.be.false
    })
    it('should return false if argument is a constructed String', () => {
        expect(isArray(new String('foo'))).to.be.false
    })
    it('should return false if argument is a number', () => {
        expect(isArray(1)).to.be.false
    })
    it('should return false if argument is an object', () => {
        expect(isArray({ foo: 'bar' })).to.be.false
    })
    it('should return false if argument is a boolean', () => {
        expect(isArray(true)).to.be.false
    })
    it('should return false if argument is null', () => {
        expect(isArray(null)).to.be.false
    })
    it('should return false if argument is undefined', () => {
        expect(isArray(undefined)).to.be.false
    })
})

describe('isArrayOf', () => {
    it('should return true if all elements in array pass the validationFn', () => {
        expect(isArrayOf([], (_e: any) => true)).to.be.true
        expect(isArrayOf([], (_e: any) => false)).to.be.true
        expect(
            isArrayOf(
                ['foo', { foo: 'bar' }, 1, null, undefined],
                (_e: any) => true,
            ),
        ).to.be.true
    })
    it('should return false if any element in array fails the validationFn', () => {
        expect(isArrayOf(['foo'], (_e: any) => false)).to.be.false
        expect(
            isArrayOf(
                ['foo', { foo: 'bar' }, 1, null, undefined],
                (e: any) => !!e,
            ),
        ).to.be.false
        expect(isArrayOf([1, 2, 3, 4, 5, 6, 7], (e: any) => e % 2 === 0)).to.be
            .false
    })
})
