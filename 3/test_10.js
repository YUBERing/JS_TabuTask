const sumPrimeNumbers = require('./10');

const assert = require('assert');

describe('sumPrimeNumbers 10', () => {
    it('should return a number', () => {
        assert.equal(typeof sumPrimeNumbers(4), 'number');
    });

    it('sumPrimeNumbers(4) should return 5', () => {
        assert.equal(sumPrimeNumbers(4), 5);
    });
});