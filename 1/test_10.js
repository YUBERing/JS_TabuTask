const fillArr = require('./task_10');

const assert = require('assert');

describe('fillArr task_10', () => {
    it('should return a array', () => {
        assert.equal(typeof fillArr([], 3), 'object');
    });

    it('fillArr([], 3) should return [1, 2, 3]', () => {
        assert.deepEqual(fillArr([], 3), [1, 2, 3]);
    });
});