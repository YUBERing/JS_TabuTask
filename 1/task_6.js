/**
 * Написать функцию, которая на вход принимает два массива и целое число n. Функция
должна скопировать каждый элемент первого массива во второй по порядку начиная с
индекса n второго массива и вернуть полученный массив. Входные массивы не должны
изменяться. (например: при входных данных ([1, 2, 3], [4, 5], 1) должно вернуться [4, 1, 2, 
3, 5].
 * @param {*} f 
 * @param {*} g 
 * @param {*} h 
 * @returns 
 */
const putInMas = (f, g, h) =>{
    let r = Array.from(f);

    let t = Array.from(g);

    let y = Array.from(h);

    if(y <= 0){
        for(let i = 0; i < r.length; i++){
            t.unshift(r[i]);
        }

        return t;
    }

    if(y >= t.length){
        for(let i = 0; i < r.length; i++){
            t.push(r[i]);
        }

        return t;
    }

    let u = [];

    for (let i = t.length; i >= y; i--){
        let l = t.pop();

        u.push(l);
    }

    for (let i = 0; i < r.length; i++){
        t.push(r[i]);
    }

    for (let i = u.length-1; i >= 0; i--){
        let l = u.pop();

        t.push(l);
    }

    return t;
}