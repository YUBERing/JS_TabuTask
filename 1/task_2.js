/**
 * Написать функцию, которая на вход принимает строку и возвращает длину самого
длинного слова в этой строке
 * @param {*} wr 
 * @returns 
 */
const findLongWord = (wr) =>{
    const f = wr.split(' ');

    let bigLen = 0;

    for (let i = 0; i < f.length; i++){
        if(f[i].length > bigLen){
            bigLen = f[i].length;
        }
    }

    return bigLen;
}
