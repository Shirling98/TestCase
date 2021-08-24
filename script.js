const dict = 'ABDEFGHIJKLMNOQRTUVWYZabdefghijklmnoqrtuvwyz0123456789+-_$~';

let generateStr = prompt('введите длину строки');
let str = '';

//Генерируем рандомную строку
for (let i = 0; i < generateStr; i++) {
    str += dict.charAt(Math.floor(Math.random() * dict.length));
}

//Разбиваем строку на элементы
let arr = str.split('');
let counterL = 0, counterN = 0;

let enterFirst = prompt("Введите символ, который заменит буквы")
let enterSecond = prompt('Введите символ, который заменит цифры')

//заменяем буквы и цифры
for (let j = 0; j < arr.length; j++) {
    if ((arr[j].toLowerCase() !== arr[j].toUpperCase())) {
        arr[j] = enterFirst;
        counterL++;
    } else if (arr[j] === '+' || arr[j] === '-' || arr[j] === '_' || arr[j] === '$' || arr[j] === '~'){
        arr[j] = arr[j];
    } else {
        arr[j] = enterSecond;
        counterN ++;
    }
}

//соединяем обратно в строку
let newStr = arr.join('');

//узнаем длину неизмененных символов
let unReplaceCounter = arr.length - counterN - counterL;

console.log(`Сгенерированная строка ${str}`)
console.log(`Строка после замены ${newStr}`);
console.log(`Заменили букв ${counterL}`);
console.log(`Заменили цифр ${counterN}`);
console.log(`Без изменений ${unReplaceCounter}`);

