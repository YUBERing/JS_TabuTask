/**
 * Написать функцию, которая на вход принимает два массива и возвращает новый
массив с элементами найденными только в одном массиве, но не в обоих.
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */
const createArrOfUnequalElem = (arr1, arr2) => {
    //Находим элементы, которые есть в первом массиве, но нет во втором
    const outArr1 = arr1.filter((item) => {
        if (!arr2.includes(item)) {
            return item;
        }
    })

    //Находим элементы, которые есть во втором массиве, но нет в первом
    const outArr2 = outArr1.concat(arr2.filter((item) => {
        if (!arr1.includes(item)) {
            outArr1.push(item);
        }
    }));

    return outArr2;
}

module.exports = createArrOfUnequalElem;