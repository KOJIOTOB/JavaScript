/*
- Знайти та вивести довижину настипних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'*/

/*let lengthText1 = 'hello world';
console.log(lengthText.length);*/

/*
let lengthText2 = 'lorem ipsum';
console.log(lengthText2.length);*/

/*
let lengthText3 = 'javascript is cool';
console.log(lengthText3.length)*/

/*
- Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'*/

/*
let lengthText1 = 'hello world';
let upText1 = lengthText1.toLocaleUpperCase();
console.log(upText1);

let lengthText2 = 'lorem ipsum';
let upText2 = lengthText2.toLocaleUpperCase();
console.log(upText2)

let lengthText3 = 'javascript is cool';
let upText3 = lengthText3.toLocaleUpperCase();
console.log(upText3)
*/


/*
- Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/

/*
let lengthText1 = 'hello world';
let downText1 = lengthText1.toLocaleLowerCase();
console.log(downText1);

let lengthText2 = 'lorem ipsum';
let downText2 = lengthText2.toLocaleLowerCase();
console.log(downText2)

let lengthText3 = 'javascript is cool';
let downText3 = lengthText3.toLocaleLowerCase();
console.log(downText3)*/


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

/*
let str = ' dirty string   ';
let trim = str.trim();
console.log(trim)*/


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

/*let str = 'Каждый охотник желает знать';
let arr = stringToarray(str);
document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']*/

/*
const stringToarray= (str) => {
    return str.split(' ');
}
let str = 'Каждый охотник желает знать';
let arr = stringToarray(str);
console.log(arr);
document.write(arr);
*/



/*
- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    let str = 'Каждый охотник желает знать';
document.writeln(delete_characters(str, 7)); // Каждый*/

/*
const delete_characters = (str, length) => {
    return str.substr(str, 7);
}
let str = 'Каждый охотник желает знать';
document.writeln(delete_characters(str, 7));*/


/*
- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
    При цьому всі символи рядка необхідно перевести у верхній регістр.
    let str = "HTML JavaScript PHP";
document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'*/


/*const insert_dash = (str) => {
    let splitJoinUpper = str.split(' ').join('-').toUpperCase();
    return splitJoinUpper;
}
let str = "HTML JavaScript PHP";
console.log(insert_dash(str))
document.writeln(insert_dash(str));*/


//Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

/*
const firstText = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1)
};
console.log(firstText('hello JS'));*/


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

/*
const capitalize = (str) => {
    return str.split(' ').map(text=>text.charAt(0).toUpperCase()+text.slice(1)).join(' ');
};
console.log(capitalize('каждый охотник желает знать'));*/
