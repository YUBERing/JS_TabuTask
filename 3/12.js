/**
 *  Написать функцию, которая принимает массив различной вложенности и возвращает
одномерный массив. Например: steamrollArray([1, [2], [3, [[4]]]]) должна вернуть [1, 2, 3, 4].
 * @param {*} inMas 
 * @returns 
 */
let steamRollArray = (inMas) => {
    let outMas = inMas.reduce((value, item) => {
        if (Array.isArray(item)) {
            return value.concat(steamRollArray(item));
        }
        else {
            value.push(item);
            return value;
        }
    }, []);

    return outMas;
}