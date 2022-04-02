/**
 * Написать функцию, которая на вход принимает строку и целое число и обрезает строку
(первый аргумент), если она длиннее заданной максимальной длины строки (второй
аргумент) и возвращает обрезанную строку с «…» в конце.
 * @param {*} str 
 * @param {*} int 
 * @returns 
 */
const trimStrToLength = (str, int) =>{
    
    if (str.length > int) {
        str = str.substring(0,int);
        return `${str}...`;
    }

    return `${str}`;
}

module.exports = trimStrToLength;