/**
 * Написать функцию, которая принимает два или более массивов и возвращает новый
массив уникальных значений. Значения должны быть отсортированы по их
первоначальному порядку.
 * @param  {...any} massive 
 * @returns 
 */
let uniqChar = (...massive) => {
    let outMas = [];

    for(let i = 0; i <= massive.length - 1; i++){
        for(const j in massive[i]){
            if(outMas.find(item => item == massive[i][j]) == undefined){
                outMas.push(massive[i][j]);
            }
        }
    }

    return outMas;
}
