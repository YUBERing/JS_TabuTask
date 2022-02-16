/**
 * Написать функцию, которая на вход принимает последовательность букв и ищет
пропущенные буквы. Если все буквы присутствуют в диапазоне, то возвращается
undefined. Например: fearNotLetter("abce") должна вернуть "d"
 * @param {*} stroke 
 * @returns 
 */
let fearNotLetter = (stroke) =>{
    let masstr = stroke.split("");

    let mascode = [];

    let outPutMas = [];

    for(const i in masstr){
        if(mascode.find(item => item == masstr[i].charCodeAt(0)) == undefined){
            mascode.push(masstr[i].charCodeAt(0));
        }
    }

    mascode.sort();
    for(let i = 0; i <= mascode.length-1; i++){
        if(mascode[i + 1] - mascode[i] > 1){
            let a = mascode[i] + 1;

            while(a < mascode[i + 1]){
                outPutMas.push(String.fromCharCode(a));
                a++;
            }
        }
    }


    if(outPutMas.length == 0){
        return undefined;
    }
    
    return outPutMas.join("");
}