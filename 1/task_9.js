/**
 * Написать функцию, которая на вход принимает масссив и целое число. Функция
должна разбить массив (первый аргумент) на группы длиной size (второй агрумент) и
вернуть их в виде двумерного массива.
 * @param {*} mas 
 * @param {*} number 
 * @returns 
 */
const makeDoubleArrayFromArray = (massive, number) => {
    return massive.reduce((arr, current) => {
        if (!arr[0]) {
            arr[0] = [current];

            return arr;
        }

        if (arr[arr.length - 1].length !== number) {
            arr[arr.length - 1].push(current);

            return arr;
        }

        arr.push([current]);

        return arr;
    }, []);
}

module.exports = makeDoubleArrayFromArray;
