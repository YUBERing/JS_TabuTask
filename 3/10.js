/**
 * Написать функцию, которая суммирует все простые числа до n (аргумент функции)
 * @param {*} number 
 * @returns 
 */
let sumPrimeNumbers = (number) => {
    let sum = 0;

    let primeNumbers = [];

    for(i=2; i <= number; i++){
        if(primeNumbers.find(item => i % item == 0) == undefined){
            primeNumbers.push(i);
        }
    }

    console.log(primeNumbers)

    for(const i in primeNumbers){
        sum = sum + primeNumbers[i];
    }

    return sum;
}
