 /**
  * Написать функцию, которая на вход принимает массив и еще один или несколько
аргументов (точное количество не известно). Удалить из массива все элементы, 
которые имеют то же значение, что и эти аргументы.
  * @param {*} massive 
  * @param  {...any} numbers 
  * @returns 
  */
const delItem = (massive, ...numbers) => {
    massive = massive.filter((elem) => {return !numbers.includes(elem)});
    return massive;
}
