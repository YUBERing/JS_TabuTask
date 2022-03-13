/**
 * Написать функцию, которая на вход принимает два массива и целое число n. Функция
должна скопировать каждый элемент первого массива во второй по порядку начиная с
индекса n второго массива и вернуть полученный массив. Входные массивы не должны
изменяться. (например: при входных данных ([1, 2, 3], [4, 5], 1) должно вернуться [4, 1, 2, 
3, 5].
 * @param {*} firstArray
 * @param {*} secondArray
 * @param {*} insertIndex 
 * @returns 
 */
const putInMas = (firstArray, secondArray, insertIndex) => {

    let outMas = [];

    if (insertIndex < 0) {
        outMas = firstArray.reduce((mas, current) => {
            mas.push(current);

            return mas;
        }, outMas)
    }

    outMas = secondArray.reduce((mas, current, index) => {
        if (index == insertIndex) {
            for (let i = 0; i < firstArray.length; i++) {
                mas.push(firstArray[i]);
            }
        }

        mas.push(current);
        
        return mas;
    }, outMas);

    if (insertIndex >= secondArray.length) {
        outMas = firstArray.reduce((mas, current) => {
            mas.push(current);

            return mas;
        }, outMas)
    }

    return outMas;
}
