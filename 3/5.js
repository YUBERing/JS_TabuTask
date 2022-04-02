/**
 * Написать функцию, которая конвертирует строку в spinal-case регистр
 * @param {*} s 
 * @returns 
 */
const convertStrToSpinalCaseRegister = (str) => {
    const strInLowerCase = str.toLowerCase();
    const strInSpinalCase = strInLowerCase.replace( / /g, "-");

    return strInSpinalCase;
}

module.exports = convertStrToSpinalCaseRegister;