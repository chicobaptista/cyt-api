import { expect } from 'chai'
import { isDate } from './date.validator'

describe('isDate', () => {
    it('should return true on valid Date', () => {
        expect(isDate(new Date())).to.be.true
        expect(isDate(new Date('December 17, 1995 03:24:00'))).to.be.true
        expect(isDate(new Date('1995-12-17T03:24:00'))).to.be.true
        expect(isDate(new Date(1995, 11, 17))).to.be.true
        expect(isDate(new Date(1995, 11, 17, 3, 24, 0))).to.be.true
    })
    it('should return false on invalidDate', () => {
        expect(isDate(new Date(''))).to.be.false
        expect(isDate(new Date('foo'))).to.be.false
        expect(isDate(new Date(undefined))).to.be.false
        expect(isDate(new Date(-100000000000000000))).to.be.false
    })
})
