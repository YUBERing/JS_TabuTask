/**
 * Написать функцию, которая на вход принимает масссив и целое число. Функция
должна разбить массив (первый аргумент) на группы длиной size (второй агрумент) и
вернуть их в виде двумерного массива.
 * @param {*} mas 
 * @param {*} number 
 * @returns 
 */
const makeDoubleMas = (massive, number) => {
    return massive.reduce((mas, current) => {
        if (!mas[0]) {
            mas[0] = [current];

            return mas;
        }

        if (mas[mas.length - 1].length !== number) {
            mas[mas.length - 1].push(current);

            return mas;
        }

        mas.push([current]);

        return mas;
    }, []);
}

console.log(makeDoubleMas([1,2,3,4,5,6,7,8,9,0], 3))
