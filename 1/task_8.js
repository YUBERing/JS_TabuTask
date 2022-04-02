/**
 * Написать функцию, которая на вход принимает массив, состоящий из двух строк. 
Функция должна вернуть true, если строка в первом элементе массива содержит все
буквы строки во втором элементе массива (регистр игнорируется).
 * @param {*} param0 
 * @returns 
 */
const compareStringsForEquivalence = ([str1, str2]) => {
    let firstArrWordsInLowwerCase = str1.toLowerCase().split('');

    firstArrWordsInLowwerCase = [...new Set(firstArrWordsInLowwerCase)];

    let secondArrWordsInLowwerCase = str2.toLowerCase().split('');

    secondArrWordsInLowwerCase = [...new Set(secondArrWordsInLowwerCase)];

    return secondArrWordsInLowwerCase.every((item) => {
        return firstArrWordsInLowwerCase.includes(item);
    })
}

module.exports = compareStringsForEquivalence;

