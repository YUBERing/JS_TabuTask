/**
 *  Написать функцию, которая принимает массив различной вложенности и возвращает
одномерный массив. Например: steamrollArray([1, [2], [3, [[4]]]]) должна вернуть [1, 2, 3, 4].
 * @param {*} multidimensionalArr 
 * @returns 
 */
const makeMultidimenOnedimenArray = (multidimensionalArr) => {
    const outArr = multidimensionalArr.reduce((value, item) => {
        if (Array.isArray(item)) {
            return value.concat(makeMultidimenOnedimenArray(item));
        }
        
        value.push(item);

        return value;
    }, []);

    return outArr;
}

module.exports = makeMultidimenOnedimenArray;