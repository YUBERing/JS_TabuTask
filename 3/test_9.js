const insertSpecialCharCode = require('./9');

const assert = require('assert');

describe('insertSpecialCharCode 9', () => {
    it('should return a string', () => {
        assert.equal(typeof insertSpecialCharCode('Hello my & <our> "world"`!`'), 'string');
    });

    it('insertSpecialCharCode("Hello my & <our> "world"`!`") should return Hello my &#38; &#8249;our&#8250; &#34;world&#34;&#8242;!&#8242;', () => {
        assert.equal(insertSpecialCharCode('Hello my & <our> "world"`!`'), 'Hello my &#38; &#8249;our&#8250; &#34;world&#34;&#8242;!&#8242;');
    });
});