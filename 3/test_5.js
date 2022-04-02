const convertStrToSpinalCaseRegister = require('./5');

const assert = require('assert');

describe('convertStrToSpinalCaseRegister 5', () => {
    it('should return a string', () => {
        assert.equal(typeof convertStrToSpinalCaseRegister('Hello world!'), 'string');
    });

    it('convertStrToSpinalCaseRegister("Hello world! It great day.") should return hello-world!-it-great-day.', () => {
        assert.equal(convertStrToSpinalCaseRegister('Hello world! It great day.'), 'hello-world!-it-great-day.');
    });
});