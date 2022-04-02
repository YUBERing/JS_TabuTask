/**
 * Написать функцию, которая принимает на вход массив из двух чисел и возвращает
сумму этих двух чисел плюс сумму всех чисел между ними. Наименьшее число не
всегда будет на первом месте. (Например sumAll([4, 1]) должен возвращать 10)
 * @param {*} param0 
 * @returns 
 */
let sumAllNumbersInRange = ([firstNumber, secondNumber]) => {
    let sum = 0;

    if (firstNumber > secondNumber) {
        while (secondNumber <= firstNumber) {
            sum+=secondNumber;
            secondNumber++;
        }

        return sum;
    }

    while(secondNumber >= firstNumber){
        sum += firstNumber;
        firstNumber++;
    }

    return sum;
};

module.exports = sumAllNumbersInRange;