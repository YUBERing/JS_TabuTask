const findLengthLongestWord = require('./task_2');

const assert = require('assert');

describe('findLengthLongestWord task_2', () => {
    it('should return a number', () => {
        assert.equal(typeof findLengthLongestWord('Hello, beautifull worlds!'), 'number');
    });

    it('should return a 10', () => {
        assert.equal(findLengthLongestWord('Hello, beautifull worlds!'), 10);
    });
});