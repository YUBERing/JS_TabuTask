/**
 * Написать функцию, которая на вход принимает строку и возвращает эту строку в
формате: каждое слово начинается с заглавной буквы, остальные в нижнем регистре.
 * @param {*} str 
 * @returns 
 */
const makeFirstLetterInUpperCase = (str) =>{
    const arrayWords = str.split(' ');

    let outArrayWords = arrayWords.map((item) => {
        if (item != '') {
            return item[0].toUpperCase() + item.slice(1);
        }

        return item;
    })

    str = outArrayWords.join(' ');

    return str;
}

module.exports = makeFirstLetterInUpperCase;