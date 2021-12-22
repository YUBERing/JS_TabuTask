/**
 * Вспомогательная функция
 * @param {*} f 
 * @returns 
 */
const arrangeMas = (f) => {
    f = Array.from(new Set(f));

    f.sort();
    let w = "";

    for (let i = 0; i < f.length; i++){
        w = w + f[i];
    }

    w = w.toLowerCase();
    return w;
}

/**
 * Написать функцию, которая на вход принимает массив, состоящий из двух строк. 
Функция должна вернуть true, если строка в первом элементе массива содержит все
буквы строки во втором элементе массива (регистр игнорируется).
 * @param {*} f 
 * @returns 
 */
const findSomeCh = (f) => {
    let h = f[0].split('');

    h = arrangeMas(h);
    let j = f[1].split('');

    j = arrangeMas(j);
    if (h.indexOf(j) != -1){
        return true;
    }

    return false;
}
