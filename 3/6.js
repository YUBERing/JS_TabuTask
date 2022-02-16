
/**
 * Написать функцию, которая осуществляет поиск и замену в предложении. Первый
аргумент - это строка, в которой осуществляется поиск и замена. Второй аргумент - это
слово, которое нужно заменить, третий аргумент - слово, на которое нужно заменить. 
При замене сохраняйте регистр первого символа в исходном слове.
 * @param {*} stroke 
 * @param {*} rplablWrd 
 * @param {*} substWrd 
 * @returns 
 */
let replaceWord = (stroke, rplablWrd, substWrd) => {
    let masstr = stroke.split(' ');

    let mascopy = [];

    for(const i in masstr){
        mascopy.push(masstr[i].toLowerCase());
    }

    for(const i in mascopy){
        if(mascopy[i] == rplablWrd){
            mascopy[i] = substWrd;
        }

        if(masstr[i][0].toUpperCase() == masstr[i][0]){
            mascopy[i] = mascopy[i][0].toUpperCase()+mascopy[i].slice(1);
        }
    }

    return mascopy.join(' ');
}