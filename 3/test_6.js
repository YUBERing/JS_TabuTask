const replaceWordInStr = require('./6');

const assert = require('assert');

describe('replaceWordInStr 6', () => {
    it('should return a string', () => {
        assert.equal(typeof replaceWordInStr('Hello world!', 'hello', 'goodbye'), 'string');
    });

    it('replaceWordInStr("Hello world hello", "hello", "goodbye") should return Goodbye world goodbye', () => {
        assert.equal(replaceWordInStr('Hello world hello', 'hello', 'goodbye'), 'Goodbye world goodbye');
    });
});