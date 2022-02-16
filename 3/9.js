let str = 'hello "my friend" &pop <asdsfg> `asasd`';

let reWord = (stroke) =>{
    let mas = stroke.split('');

    for(const i in mas){
        if(mas[i] == '&'){
            mas[i] = '&#38;';
        }

        if(mas[i] == '<'){
            mas[i] = '&#8249;';
        }

        if(mas[i] == '>'){
            mas[i] = '&#8250;';
        }

        if(mas[i] == '"'){
            mas[i] = '&#34;';
        }

        if(mas[i] == '`'){
            mas[i] = '&#8242;';
        }
    }

    return mas.join('');
}

console.log(reWord(str));