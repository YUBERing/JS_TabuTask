/**
 * Написать функцию, которая на вход принимает строку и возвращает длину самого
длинного слова в этой строке
 * @param {*} str 
 * @returns 
 */
const findLengthLongestWord = (str) => {
    const arrayWords = str.split(' ');

    let bigLength = arrayWords.reduce((value, current) => {
        if (current.length > value.length) {
            return current;
        }

        return value;
    }).length;

    return bigLength;
}

module.exports = findLengthLongestWord;
