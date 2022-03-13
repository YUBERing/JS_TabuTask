/**
 * Используя рекурсию (без использования циклов). Написать функцию, которая
принимает массив и целое число (n) и заполняет массив числами от n до 1.
 * @param {*} f 
 * @param {*} g 
 * @returns 
 */
const fillMas = (inputMas, number) => {
    if (inputMas.length != number){
        inputMas.push(inputMas.length + 1);
        
        return fillMas(inputMas, number);
    }

    return f;
}
