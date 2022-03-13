let str = 'hello "my friend" &pop <asdsfg> `asasd`';

const reWord = (stroke) =>{
    let mas = stroke.split('');

    for(const i in mas){
        switch (mas[i]) {
            case '&':
                mas[i] = '&#38;';
                break;
            case '<':
                mas[i] = '&#8249;';
                break;
            case '>':
                mas[i] = '&#8250;';
                break;
            case '"':
                mas[i] = '&#34;';
                break;
            case '`':
                mas[i] = '&#8242;';
                break;
        }
    }

    return mas.join('');
}

console.log(reWord(str));