
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
let replaceWord = (stroke, findWrd, substrWrd) => {
    const masStr = stroke.split(' ');

    let masCopy = masStr.map(item => item.toLowerCase());

    for (const i in masCopy) {
        if (masCopy[i] === findWrd) {
            masCopy[i] = substrWrd;
        }

        if (masStr[i][0].toUpperCase() === masStr[i][0]) {
            masCopy[i] = masCopy[i][0].toUpperCase() + masCopy[i].slice(1);
        }
    }

    return masCopy.join(' ');
}