/**
 * Написать функцию, которая на вход принимает целое число и возвращает факториал
 этого числа.
 * @param {*} ch 
 * @returns 
 */
const getFact = (ch) => {
    let i = 1;

    if (ch < 0){
        return 'The entered number is negative. It is impossible to calculate the factorial.';
    }
    
    for (let b = 1; b <= ch; b++){
        i = i * b;
    }

    return i;
}