/**
 * Написать функцию, которая на вход принимает строку и возвращает длину самого
длинного слова в этой строке
 * @param {*} wr 
 * @returns 
 */
const findLongWord = (wr) => {
    const f = wr.split(' ');

    let bigLen = f.reduce((value, current) => {
        if (current.length > value.length) {
            return current;
        }

        return value;
    }).length;

    return bigLen;
}
