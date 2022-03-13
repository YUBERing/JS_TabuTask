/**
 * Написать функцию, которая суммирует все простые числа до n (аргумент функции)
 * @param {*} number 
 * @returns 
 */
const sumPrimeNumbers = (number) => {
    const primeNumbers = [];

    for (i=2; i <= number; i++) {
        if (primeNumbers.find(item => i % item == 0) == undefined) {
            primeNumbers.push(i);
        }
    }

    let sum = primeNumbers.reduce((value, elem) => {
        return value + elem;
    }, 0);

    return sum;
}
