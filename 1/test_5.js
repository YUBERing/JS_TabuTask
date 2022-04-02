const makeFirstLetterInUpperCase = require('./task_5');

const assert = require('assert');

describe('makeFirstLetterInUpperCase task_5', () => {
    it('should return a string', () => {
        assert.equal(typeof makeFirstLetterInUpperCase('Hello great worlds!'), 'string');
    });

    it('makeFirstLetterInUpperCase("Hello great worlds") should return "Hello Greate Worlds!"', () => {
        assert.equal(makeFirstLetterInUpperCase('Hello great worlds!'), 'Hello Great Worlds!');
    });
});