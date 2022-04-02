/**
 * Написать функцию, которая принимает два или более массивов и возвращает новый
массив уникальных значений. Значения должны быть отсортированы по их
первоначальному порядку.
 * @param  {...any} arr 
 * @returns 
 */
const makeArrayOfUniqueValue = (...arr) => {
    let outArr = arr.reduce((value, elem) => {
        elem.forEach((current) => {
            if (!value.includes(current)){
                value.push(current);
            }
        });

        return value;
    }, []);

    return outArr;
}

module.exports = makeArrayOfUniqueValue;