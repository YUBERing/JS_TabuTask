const getFact = require('./task_1');

const assert = require('assert');

describe('getFact task_1', () => {
    it('should return a number', () => {
        assert.equal(typeof getFact(5), 'number');
    });

    it('should return a 120', () => {
        assert.equal(getFact(5), 120);
    });

    it('should return a 1', () => {
        assert.equal(getFact(0), 1);
    });

    it('should return a "The entered number is negative. It is impossible to calculate the factorial."', () => {
        assert.equal(getFact(-1), 'The entered number is negative. It is impossible to calculate the factorial.');
    });
});