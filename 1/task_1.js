/**
 * Написать функцию, которая на вход принимает целое число и возвращает факториал
 этого числа.
 * @param {*} number 
 * @returns 
 */
const getFact = (number) => {
    let factorial = 1;

    if (number < 0) {
        return 'The entered number is negative. It is impossible to calculate the factorial.';
    }
    
    for (let intermediateNumber = 1; intermediateNumber <= number; intermediateNumber++) {
        factorial = factorial * intermediateNumber;
    }

    return factorial;
}

module.exports = getFact;