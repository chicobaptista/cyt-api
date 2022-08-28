import { expect } from 'chai'
import { isString } from './string.validator'

describe('isString', () => {
    it('should return true if argument is string literal', () => {
        expect(isString('foo')).to.be.true
    })
    it('should return true if argument is a constructed String', () => {
        expect(isString(new String('foo'))).to.be.true
    })
    it('should return false if argument is a number', () => {
        expect(isString(1)).to.be.false
    })
    it('should return false if argument is an array', () => {
        expect(isString(['foo'])).to.be.false
    })
    it('should return false if argument is an object', () => {
        expect(isString({ foo: 'bar' })).to.be.false
    })
    it('should return false if argument is a boolean', () => {
        expect(isString(true)).to.be.false
    })
    it('should return false if argument is null', () => {
        expect(isString(null)).to.be.false
    })
    it('should return false if argument is undefined', () => {
        expect(isString(undefined)).to.be.false
    })
})
