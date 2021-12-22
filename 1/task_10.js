/**
 * Используя рекурсию (без использования циклов). Написать функцию, которая
принимает массив и целое число (n) и заполняет массив числами от n до 1.
 * @param {*} f 
 * @param {*} g 
 * @returns 
 */
const fillMas = (f, g) =>{
    if (f.length != g){
        f.push(f.length + 1);
        return fillMas(f, g);
    }

    return f;
}
