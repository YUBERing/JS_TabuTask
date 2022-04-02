/**
 * 
 * @param {*} str 
 * @returns 
 */
const insertSpecialCharCode = (str) =>{
    let arr = str.split('');

    for(const i in arr){
        switch (arr[i]) {
            case '&':
                arr[i] = '&#38;';
                break;
            case '<':
                arr[i] = '&#8249;';
                break;
            case '>':
                arr[i] = '&#8250;';
                break;
            case '"':
                arr[i] = '&#34;';
                break;
            case '`':
                arr[i] = '&#8242;';
                break;
        }
    }

    return arr.join('');
}

module.exports = insertSpecialCharCode;
