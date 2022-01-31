/**
 * Написать функцию, которая на вход принимает два массива и возвращает новый
массив с элементами найденными только в одном массиве, но не в обоих.
 * @param {*} mas1 
 * @param {*} mas2 
 * @returns 
 */
let findEl = (mas1, mas2) => {
    let outMas = [];

    //Находим элементы, которые есть в первом массиве, но нет во втором
    mas1.forEach(function(element){
        if(mas2.find(item => item == element) == undefined){
            outMas.push(element);
        }
    });

    //Находим элементы, которые есть во втором массиве, но нет в первом
    mas2.forEach(function(element){
        if(mas1.find(item => item == element) == undefined){
            outMas.push(element);
        }
    });

    return outMas;
}