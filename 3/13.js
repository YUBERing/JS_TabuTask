/**
 * Написать функцию, которая суммирует два аргумента вместе. Если указан только один
аргумент, то возвращает функцию, которая ожидает второй аргумент и возвращает
сумму
 * @param {*} first 
 * @param {*} twel 
 * @returns 
 */
function sumTwoNumbers (first, twel){

    if (arguments.length === 2) {
        return first + twel;
    }

    return (twel) => {
        return first + twel;
    }
}

module.exports = sumTwoNumbers;
