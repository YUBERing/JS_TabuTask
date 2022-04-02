const insertArrayIntoArray = require('./task_6');

const assert = require('assert');

describe('insertArrayIntoArray task_6', () => {
    it('should return a array', () => {
        assert.equal(typeof insertArrayIntoArray([1, 2, 3], [4, 5], 1), 'object');
    });

    it('insertArrayIntoArray([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5]', () => {
        assert.deepEqual(insertArrayIntoArray([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5]);
    });

    it('insertArrayIntoArray([1, 2, 3], [4, 5], -5) should return [1, 2, 3, 4, 5]', () => {
        assert.deepEqual(insertArrayIntoArray([1, 2, 3], [4, 5], -5), [1, 2, 3, 4, 5]);
    });

    it('insertArrayIntoArray([1, 2, 3], [4, 5], 5) should return [4, 5, 1, 2, 3]', () => {
        assert.deepEqual(insertArrayIntoArray([1, 2, 3], [4, 5], 5), [4, 5, 1, 2, 3]);
    });
});