/*  Написать свою реализацию функций: map, filter, find, some, every. */

/**
 * Функция Map
 * @param {*} callback 
 * @param {*} thisArg 
 * @returns 
 */
Array.prototype.altMap = function (callback, thisArg) {
    if (this == null) {
        throw new Error('Не могу выполнить итерацию над неопределенным значением');
    }

    let context = this;

    let obj = Object(this);

    if (arguments.length > 1){
        context = thisArg;
    }

    if (typeof callback !== 'function') {
        throw new Error('В качестве первого аргумента необходима функция.');
    }
    
    let len = obj.length;

    let newArray = [];

    let i = 0;

    while (i < len) {
        if (i in obj) {
            newArray[i] = callback.call(context, this[i], i, obj);
        }

        i++;
    }

    return newArray;
}


/**
 * Функция filter
 * @param {*} callback 
 * @param {*} thisArg 
 * @returns 
 */
Array.prototype.altFilter = function (callback, thisArg) {
    if (this == null) {
        throw new Error('Не могу выполнить итерацию над неопределенным значением');
    }

    let context = this;

    let obj = Object(this);

    if (arguments.length > 1){
        context = thisArg;
    }

    if (typeof callback !== 'function') {
        throw new Error('В качестве первого аргумента необходима функция.');
    }
    
    let len = obj.length;

    let newArray = [];

    let i = 0;

    while (i < len) {
        if (i in obj) {
            if(callback.call(context, this[i], i, obj)){
                newArray.push(this[i])
            }
        }

        i++;
    }

    return newArray;
}


/**
 * Функция find
 * @param {*} callback 
 * @param {*} thisArg 
 * @returns 
 */
Array.prototype.altFind = function (callback, thisArg) {
    if (this == null) {
        throw new Error('Не могу выполнить итерацию над неопределенным значением');
    }

    let context = this;

    let obj = Object(this);

    if (arguments.length > 1){
        context = thisArg;
    }

    if (typeof callback !== 'function') {
        throw new Error('В качестве первого аргумента необходима функция.');
    }
    
    let len = obj.length;

    let i = 0;

    while (i < len) {
        if (i in obj) {
            let k = this[i];
            if(callback.call(context, this[i], i, obj)){
                return k;
            }
        }

        i++;
    }

    return undefined;
}


/**
 * Функция some
 * @param {*} callback 
 * @param {*} thisArg 
 * @returns 
 */
Array.prototype.altEvery = function (callback, thisArg) {
    if (this == null) {
        throw new Error('Не могу выполнить итерацию над неопределенным значением');
    }

    let context = this;

    let obj = Object(this);

    if (arguments.length > 1){
        context = thisArg;
    }

    if (typeof callback !== 'function') {
        throw new Error('В качестве первого аргумента необходима функция.');
    }
    
    let len = obj.length;

    let i = 0;

    while (i < len) {
        if (i in obj) {
            let k = this[i];

            if(callback.call(context, this[i], i, obj)){
                return true;
            }
        }

        i++;
    }

    return false;
}


/**
 * Функция every
 * @param {*} callback 
 * @param {*} thisArg 
 * @returns 
 */
Array.prototype.altEvery = function (callback, thisArg) {
    if (this == null) {
        throw new Error('Не могу выполнить итерацию над неопределенным значением');
    }

    let context = this;

    let obj = Object(this);

    if (arguments.length > 1){
        context = thisArg;
    }

    if (typeof callback !== 'function') {
        throw new Error('В качестве первого аргумента необходима функция.');
    }
    
    let len = obj.length;

    let i = 0;

    while (i < len) {
        if (i in obj) {
            let k = this[i];

            if(!callback.call(context, this[i], i, obj)){
                return false;
            }
        }

        i++;
    }

    return true;
}