
/**
 * Написать функцию, которая осуществляет поиск и замену в предложении. Первый
аргумент - это строка, в которой осуществляется поиск и замена. Второй аргумент - это
слово, которое нужно заменить, третий аргумент - слово, на которое нужно заменить. 
При замене сохраняйте регистр первого символа в исходном слове.
 * @param {*} str 
 * @param {*} rplablWrd 
 * @param {*} substWrd 
 * @returns 
 */
let replaceWordInStr = (str, replacedWord, replacementWord) => {
    const arrStr = str.split(' ');

    const arrCopy = arrStr.map((item, i) => {
        let copyItem = item.toLowerCase();

        if (copyItem === replacedWord) {
            copyItem = replacementWord;
        }

        if (arrStr[i][0].toUpperCase() === arrStr[i][0]){
            copyItem = copyItem[0].toUpperCase() + copyItem.slice(1);
        }

        return copyItem;
    });

    return arrCopy.join(' ');
}

module.exports = replaceWordInStr;