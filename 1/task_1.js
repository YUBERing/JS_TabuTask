/**
 * Написать функцию, которая на вход принимает целое число и возвращает факториал
 этого числа.
 * @param {*} num 
 * @returns 
 */
const getFact = (num) => {
    let i = 1;

    if (num < 0) {
        return 'The entered number is negative. It is impossible to calculate the factorial.';
    }
    
    for (let b = 1; b <= num; b++) {
        i = i * b;
    }

    return i;
}