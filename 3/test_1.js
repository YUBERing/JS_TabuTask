const sumAllNumbersInRange = require('./1');

const assert = require('assert');

describe('sumAllNumbersInRange 1', () => {
    it('should return a number', () => {
        assert.equal(typeof sumAllNumbersInRange([4, 1]), 'number');
    });

    it('sumAllNumbersInRange(4, 1) should return 10', () => {
        assert.equal(sumAllNumbersInRange([4, 1]), 10);
    });

    it('sumAllNumbersInRange(1, 4) should return 10', () => {
        assert.equal(sumAllNumbersInRange([1, 4]), 10);
    });
});