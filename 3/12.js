/**
 *  Написать функцию, которая принимает массив различной вложенности и возвращает
одномерный массив. Например: steamrollArray([1, [2], [3, [[4]]]]) должна вернуть [1, 2, 3, 4].
 * @param {*} inMas 
 * @returns 
 */
let steamrollArray = (inMas) => {
    let outMas = [];

    for(const i in inMas){
        if(Array.isArray(inMas[i])){
            outMas = outMas.concat(steamrollArray(inMas[i]));
        }
        else{
            outMas.push(inMas[i]);
        }

    };

    return outMas;
}
