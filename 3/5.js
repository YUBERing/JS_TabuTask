/**
 * Написать функцию, которая конвертирует строку в spinal-case регистр
 * @param {*} s 
 * @returns 
 */
const rewSpinCase = (str) => {
    let strInLowerCase = str.toLowerCase();
    let strInSpinalCase = strInLowerCase.replace( / /g, "-");

    return strInSpinalCase;
}