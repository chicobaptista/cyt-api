import { isNonEmptyString, isString, isUuid } from './string.validator'
import { expect } from 'chai'
import { v4 } from 'uuid'

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
    it('should return false if argument is a Date', () => {
        expect(isString(new Date())).to.be.false
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
    it('should return true if argument is a literal string boolean', () => {
        expect(isString('false')).to.be.true
    })
    it('should return false if argument is null', () => {
        expect(isString(null)).to.be.false
    })
    it('should return true if argument is a literal string null', () => {
        expect(isString('null')).to.be.true
    })
    it('should return false if argument is undefined', () => {
        expect(isString(undefined)).to.be.false
    })
    it('should return true if argument is a literal string undefined', () => {
        expect(isString('undefined')).to.be.true
    })
})

describe('isNonEmptyString', () => {
    it('should return true if argument is string literal', () => {
        expect(isNonEmptyString('foo')).to.be.true
    })
    it('should return true if argument is a constructed String', () => {
        expect(isNonEmptyString(new String('foo'))).to.be.true
    })
    it('should return false if argument is a number', () => {
        expect(isNonEmptyString(1)).to.be.false
    })
    it('should return false if argument is a Date', () => {
        expect(isNonEmptyString(new Date())).to.be.false
    })
    it('should return false if argument is an array', () => {
        expect(isNonEmptyString(['foo'])).to.be.false
    })
    it('should return false if argument is an object', () => {
        expect(isNonEmptyString({ foo: 'bar' })).to.be.false
    })
    it('should return false if argument is a boolean', () => {
        expect(isNonEmptyString(true)).to.be.false
    })
    it('should return false if argument is a literal string true boolean', () => {
        expect(isNonEmptyString('true')).to.be.true
    })
    it('should return false if argument is a literal string false boolean', () => {
        expect(isNonEmptyString('false')).to.be.false
    })
    it('should return false if argument is null', () => {
        expect(isNonEmptyString(null)).to.be.false
    })
    it('should return false if argument is a literal string null', () => {
        expect(isNonEmptyString('null')).to.be.false
    })
    it('should return false if argument is undefined', () => {
        expect(isNonEmptyString(undefined)).to.be.false
    })
    it('should return false if argument is a literal string undefined', () => {
        expect(isNonEmptyString('undefined')).to.be.false
    })
})

describe('isUuid', () => {
    it('should return true if argument is a valid uuid string literal', () => {
        expect(isUuid(v4())).to.be.true
    })
    it('should return true if argument is a valid uuid constructed String', () => {
        expect(isUuid(new String(v4()))).to.be.true
    })

    it('should return false if argument is a non-uuid string literal', () => {
        expect(isUuid('a24a6ea4-ce75-4665-a070')).to.be.false
    })
    it('should return false if argument is a non-uuid constructed String', () => {
        expect(isUuid(new String('a24a6ea4-ce75-4665-a070'))).to.be.false
    })
    it('should return false if argument is a number', () => {
        expect(isUuid(1)).to.be.false
    })
    it('should return false if argument is a Date', () => {
        expect(isUuid(new Date())).to.be.false
    })
    it('should return false if argument is an array', () => {
        expect(isUuid(['foo'])).to.be.false
    })
    it('should return false if argument is an object', () => {
        expect(isUuid({ foo: 'bar' })).to.be.false
    })
    it('should return false if argument is a boolean', () => {
        expect(isUuid(true)).to.be.false
    })
    it('should return false if argument is null', () => {
        expect(isUuid(null)).to.be.false
    })
    it('should return false if argument is undefined', () => {
        expect(isUuid(undefined)).to.be.false
    })
})
