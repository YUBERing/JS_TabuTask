/**
 * Написать функцию, которая на вход принимает два массива и целое число n. Функция
должна скопировать каждый элемент первого массива во второй по порядку начиная с
индекса n второго массива и вернуть полученный массив. Входные массивы не должны
изменяться. (например: при входных данных ([1, 2, 3], [4, 5], 1) должно вернуться [4, 1, 2, 
3, 5].
 * @param {*} firstArray
 * @param {*} secondArray
 * @param {*} insertIndex 
 * @returns 
 */
const insertArrayIntoArray = (firstArray, secondArray, insertIndex) => {

    let outArr = [...secondArray];

    outArr.splice(insertIndex, 0, ...firstArray);

    return outArr;
}

module.exports = insertArrayIntoArray;
