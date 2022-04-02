/**
 * Написать функцию, которая на вход принимает последовательность букв и ищет
пропущенные буквы. Если все буквы присутствуют в диапазоне, то возвращается
undefined. Например: fearNotLetter("abce") должна вернуть "d"
 * @param {*} str 
 * @returns 
 */
const findMissingLetters = (str) => {
    const masStr = str.split("");

    const masCodes = masStr.reduce((value, elem) => {
        if (!value.includes(elem.charCodeAt(0))) {
            value.push(elem.charCodeAt(0));
        }

        return value;
    }, []);
    
    let outPutMas = [];

    masCodes.sort();
    masCodes.reduce((firtsChar, secondChar) => {
        if (secondChar - firtsChar > 1) {
            let outPutChar = firtsChar + 1;

            while (outPutChar < secondChar) {
                outPutMas.push(String.fromCharCode(outPutChar));
                outPutChar++;
            }
        }

        return secondChar;
    });

    if (outPutMas.length === 0) {
        return undefined;
    }
    
    return outPutMas.join("");
}

module.exports = findMissingLetters;