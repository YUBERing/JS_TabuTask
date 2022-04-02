const removeFalseValue = require('./task_7');

const assert = require('assert');

describe('removeFalseValue task_7', () => {
    it('should return a array', () => {
        assert.equal(typeof removeFalseValue([1, undefined, 5, null, 8, false, 2, 0]), 'object');
    });

    it('removeFalseValue([1, undefined, 5, null, 8, false, 2, 0]) should return [1, 5, 8, 2]', () => {
        assert.deepEqual(removeFalseValue([1, undefined, 5, null, 8, false, 2, 0]), [1, 5, 8, 2]);
    });
});