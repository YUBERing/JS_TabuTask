/**
 * Написать функцию, которая конвертирует строку в spinal-case регистр
 * @param {*} s 
 * @returns 
 */
let rewSpinCase = (s) => {
    let k = s.toLowerCase();
    let p = k.replace( / /g, "-" );

    return p;
}