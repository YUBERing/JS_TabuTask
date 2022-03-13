/**
 * Написать функцию, которая на вход принимает последовательность букв и ищет
пропущенные буквы. Если все буквы присутствуют в диапазоне, то возвращается
undefined. Например: fearNotLetter("abce") должна вернуть "d"
 * @param {*} stroke 
 * @returns 
 */
const fearNotLetter = (stroke) =>{
    let masStr = stroke.split("");

    let masCodes = masStr.reduce((value, elem) =>{
        if (!value.includes(elem.charCodeAt(0))) {
            value.push(elem.charCodeAt(0));
        }

        return value;
    }, []);
    
    let outPutMas = [];

    masCodes.sort();
    masCodes.reduce((value, elem) => {
        if (elem - value > 1){
            let outPutChar = value + 1;

            while (outPutChar < elem) {
                outPutMas.push(String.fromCharCode(outPutChar));
                outPutChar++;
            }
        }

        return elem;
    })

    if (outPutMas.length == 0) {
        return undefined;
    }
    
    return outPutMas.join("");
}