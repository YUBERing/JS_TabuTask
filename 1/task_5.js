/**
 * Написать функцию, которая на вход принимает строку и возвращает эту строку в
формате: каждое слово начинается с заглавной буквы, остальные в нижнем регистре.
 * @param {*} f 
 * @returns 
 */
const makeUpChar = (f) =>{
    const h = f.split(' ');

    let mas = h.map((item) => {
        if (item != '') {
            return item[0].toUpperCase() + item.slice(1);
        }

        return item;
    })

    f = mas.join(' ');

    return f;
}