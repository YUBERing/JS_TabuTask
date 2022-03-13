/**
 * Написать функцию, которая на вход принимает массив, состоящий из массивов целых
чисел (например: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]) и возвращает массив состоящий из
наибольшего числа каждого предоставленного подмассива.
 * @param {*} f 
 * @returns 
 */
const takeMasBigCh = (f) =>{
    let h = [];

    f.forEach((item) => {
        let b = item.reduce((value, current) => {
            if(current > value) {
                return current;
            }

            return value;
        });

        h.push(b);
    })

    return h;
}
