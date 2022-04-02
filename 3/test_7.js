const findMissingLetters = require('./7');

const assert = require('assert');

describe('findMissingLetters 7', () => {
    it('should return a string', () => {
        assert.equal(typeof findMissingLetters('abcdeg'), 'string');
    });

    it('findMissingLetters("abcdeg") should return f', () => {
        assert.deepEqual(findMissingLetters('abcdeg'), 'f');
    });
});