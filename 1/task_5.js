/**
 * Написать функцию, которая на вход принимает строку и возвращает эту строку в
формате: каждое слово начинается с заглавной буквы, остальные в нижнем регистре.
 * @param {*} f 
 * @returns 
 */
const makeUpChar = (f) =>{
    let h = f.split(' ');

    f = '';

    for (let i = 0; i < h.length; i++){
        if (h[i] != ''){
            h[i] = h[i][0].toUpperCase() + h[i].slice(1);
            f = f + ' ' + h[i];
        }
    }

    f = f.slice(1);

    return f;
}