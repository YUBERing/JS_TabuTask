/**
 * Написать функцию, которая на вход принимает массив, состоящий из двух строк. 
Функция должна вернуть true, если строка в первом элементе массива содержит все
буквы строки во втором элементе массива (регистр игнорируется).
 * @param {*} param0 
 * @returns 
 */
const findSomeCh = ([str1, str2]) => {
    let h = str1.toLowerCase().split('');

    h = [...new Set(h)];

    let j = str2.toLowerCase().split('');

    j = [...new Set(j)];

    return j.every((item) => {
        return h.includes(item);
    })
}

