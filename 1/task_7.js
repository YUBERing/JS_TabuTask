/**
 * Написать функцию, которая на вход принимает массив и удаляет в нем все "ложные
значения".
 * @param {*} arr 
 * @returns 
 */
const removeFalseValue = (arr) => {
    return  arr.filter(Boolean);
}

module.exports = removeFalseValue;

