const makeMultidimenOnedimenArray = require('./12');

const assert = require('assert');

describe('makeMultidimenOnedimenArray 12', () => {
    it('should return a array', () => {
        assert.equal(typeof makeMultidimenOnedimenArray([1, [2], [3, [[4]]]]), 'object');
    });

    it('makeMultidimenOnedimenArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]', () => {
        assert.deepEqual(makeMultidimenOnedimenArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);
    });
});