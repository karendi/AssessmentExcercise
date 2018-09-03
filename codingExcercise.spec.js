const chai = require('chai');
const assert = chai.assert;

const convertNumberToWords = require('./codingExcercise');

describe('The numbers are changed to words', ()=>{
    it('checks if a number has been provided', ()=>{
        assert.equal(convertNumberToWords(), 'You have to provide a number');
    });

    it('can change 0 to zero', () => {
        assert.equal(convertNumberToWords(0), 'zero');
    });

    it('can convert ones', ()=> {
        assert.equal(convertNumberToWords(8), 'eight');
    });

    it('can convert tens', ()=> {
        assert.equal(convertNumberToWords(23), 'twenty three');
    });

    it('can convert thousands', ()=> {
        assert.equal(convertNumberToWords(1023), 'one thousand twenty three');
    });

    it('can convert millions', ()=> {
        assert.equal(convertNumberToWords(1000002), 'one million two');
    });

    it('can convert billions', ()=> {
        assert.equal(convertNumberToWords(100000046123), 'one hundred billion forty six thousand one hundred twenty three');
    });

});
