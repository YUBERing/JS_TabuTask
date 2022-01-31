 /**
  * Написать функцию, которая на вход принимает массив и еще один или несколько
аргументов (точное количество не известно). Удалить из массива все элементы, 
которые имеют то же значение, что и эти аргументы.
  * @param {*} massive 
  * @param  {...any} numbers 
  * @returns 
  */
let delItem = (massive, ...numbers) => {
    for (let i = 0; i <= numbers.length - 1; i++) {
        massive = massive.filter((elem) => {return elem != numbers[i]});
    }
    
    return massive;
}
