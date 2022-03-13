
/**
 * Создайте функцию, которая просматривает массив объектов (первый аргумент) и
возвращает массив всех объектов, имеющих совпадающие пары имя и значение
(второй аргумент). Например: whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, 
{ "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) должен
вернуться [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]

 * @param {*} mas 
 * @param {*} check 
 * @returns 
 */
let findSameObj = (mas, check) => {
    let outMas = mas.filter((elem) => {
        let counter = 0;

        for (const k in check) {
            if (k in elem && elem[k] === check[k]) {
                counter++;
            }
        }

        return counter === Object.keys(check).length;
    });

    return outMas;
}

console.log(findSameObj([{ "apple": 1, "bat": 2 }, { "apple": 1 }, 
{ "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }))