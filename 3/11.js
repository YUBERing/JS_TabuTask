/**
 * Написать функцию, которая принимает массив и функцию и удаляет каждый элемент
массива начиная с первого, пока функция не вернет true, а затем возвращает
оставшуюся часть массива. Например: dropElements([1, 2, 3, 4], function(n) {return n >= 
3;}) должна вернуть [3, 4].
 * @param {*} massive 
 * @param {*} func 
 * @returns 
 */
const deleteItemsConditionIsMet = (massive, func) => {
    massive = massive.map((item) => {
        if (func(item) == true) {
            return item;
        }
    })

    return massive.filter(Boolean);
}

module.exports = deleteItemsConditionIsMet;