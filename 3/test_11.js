const deleteItemsConditionIsMet = require('./11');

const assert = require('assert');

describe('deleteItemsConditionIsMet 11', () => {
    it('should return a array', () => {
        assert.equal(typeof deleteItemsConditionIsMet([1, 2, 3, 4], function(n) {return n >= 3;}), 'object');
    });

    it('deleteItemsConditionIsMet([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4]', () => {
        assert.deepEqual(deleteItemsConditionIsMet([1, 2, 3, 4], function(n) {return n >= 3;}), [3, 4]);
    });
});