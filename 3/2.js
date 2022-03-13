/**
 * Написать функцию, которая на вход принимает два массива и возвращает новый
массив с элементами найденными только в одном массиве, но не в обоих.
 * @param {*} mas1 
 * @param {*} mas2 
 * @returns 
 */
const findEl = (mas1, mas2) => {
    const outMas = [];

    //Находим элементы, которые есть в первом массиве, но нет во втором
    mas1.filter((item) => {
        if (!mas2.includes(item)) {
            outMas.push(item);
        }
    })

    //Находим элементы, которые есть во втором массиве, но нет в первом
    mas2.filter((item) => {
        if (!mas1.includes(item)) {
            outMas.push(item);
        }
    })

    return outMas;
}