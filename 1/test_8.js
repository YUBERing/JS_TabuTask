const compareStringsForEquivalence = require('./task_8');

const assert = require('assert');

describe('compareStringsForEquivalence task_8', () => {
    it('should return a boolean', () => {
        assert.equal(typeof compareStringsForEquivalence(['abcefgdpou', 'abcefg']), 'boolean');
    });

    it('compareStringsForEquivalence(["abcefgdpou", "abcefg"]) should return true', () => {
        assert.equal(compareStringsForEquivalence(['abcefgdpou', 'abcefg']), true);
    });

    it('compareStringsForEquivalence(["abcefg", "abcefgdpou"]) should return false', () => {
        assert.equal(compareStringsForEquivalence(['abcefg', 'abcefgdpou']), false);
    });
});