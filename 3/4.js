
/**
 * Создайте функцию, которая просматривает массив объектов (первый аргумент) и
возвращает массив всех объектов, имеющих совпадающие пары имя и значение
(второй аргумент). Например: whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, 
{ "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) должен
вернуться [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]

 * @param {*} arrayObjects 
 * @param {*} verificationObj 
 * @returns 
 */
let findEqualObjectFromArrayObjects = (arrayObjects, verificationObj) => {
    const outArr = arrayObjects.filter((elem) => {
        let counter = 0;

        for (const k in verificationObj) {
            if (k in elem && elem[k] === verificationObj[k]) {
                counter++;
            }
        }

        return counter === Object.keys(verificationObj).length;
    });

    return outArr;
}

module.exports = findEqualObjectFromArrayObjects;