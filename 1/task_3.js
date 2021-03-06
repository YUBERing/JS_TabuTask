/**
 * Написать функцию, которая на вход принимает массив, состоящий из массивов целых
чисел (например: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]) и возвращает массив состоящий из
наибольшего числа каждого предоставленного подмассива.
 * @param {*} massive 
 * @returns 
 */
const makeArrayOfLargestNumbers = (massive) =>{
    let outArr = massive.map((item) => {
        let largestNumber = item.reduce((value, current) => {
            if(current > value) {
                return current;
            }

            return value;
        });

        return largestNumber;
    })

    return outArr;
}

module.exports = makeArrayOfLargestNumbers;