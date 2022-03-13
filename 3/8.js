/**
 * Написать функцию, которая принимает два или более массивов и возвращает новый
массив уникальных значений. Значения должны быть отсортированы по их
первоначальному порядку.
 * @param  {...any} massive 
 * @returns 
 */
const uniqChar = (...massive) => {
    let outMas = massive.reduce((value, elem) => {
        elem.forEach((current) => {
            if (!value.includes(current)){
                value.push(current);
            }
        });

        return value;
    }, []);

    return outMas;
}