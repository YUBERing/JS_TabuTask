const sumTwoNumbers = require('./13');

const assert = require('assert');

describe('sumTwoNumbers 13', () => {
    it('should return a number', () => {
        assert.deepEqual(typeof sumTwoNumbers(1, 2), 'number');
    });

    it('sumTwoNumbers(1, 2) should return 3', () => {
        assert.equal(sumTwoNumbers(1, 2), 3);
    });

    it('sumTwoNumbers(1)(2) should return 3', () => {
        assert.deepEqual(sumTwoNumbers(1)(2), 3);
    });
});