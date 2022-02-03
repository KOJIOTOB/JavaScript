/*
- Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох .
    Також потрібно врахувати коли введені рівні числа.*/

/*
let numA = +prompt("enter first number")
let numB = +prompt("enter second number");
// let numC = 50;

if (numA > numB) {
    alert("First number is bigger")
} else if (numB > numA) {
    alert("Second number is bigger")
} else if (numB === numA) {
    alert("First is the same as second")
}*/

/*
- У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
Користувач вводить номер квартири просто в змінні або через prompt('') .
    Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
*/
/*

let entrance = +prompt("Укажите номер подъезда!")
console.log(entrance);

if (entrance > 1 && entrance < 20) {
    console.log('В первом подъезде!')
} else if (entrance >= 21 && entrance <= 48) {
    console.log('Во втором подъезде!')
} else if (entrance >= 49 && entrance <= 90) {
    console.log('В третьем подъезде!')
}
else {
    console.log("Повторите ввод еще раз");
}*/


/*
- Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести
повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО*/


/*
let number = +prompt("вiрно або невiрно")

if (number === 10) {
    console.log("Вiрно!")
}
else if ( number !== 10) {
    console.log("Невiрно")
}*/


/*
- Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
    якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
якщо в змінну записали щось інше, спрацьовує else*/

/*

let x = 'dsfg'

if (typeof x === "number") {
    console.log(typeof x)

} else if (typeof x === "string") {
    console.log(typeof x)

} else if (typeof x === "boolean") {
    console.log(typeof x)
} else if (typeof x === "object") {
    console.log(typeof x)
} else  {
    console.log("Error")
}
*/


/*
- Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
    Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
    Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН*/

/*
let okten = +prompt("Чи ми йдемо сьогодні в OKTEN на навчання?")
if (okten > 10 && okten < 22) {
    console.log('Ми йдемо вчитися!')
} else {
    console.log("Сидимо вдома і вчимося ОНЛАЙН")
}*/



/*
- За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5.
 І взалежності від введеного числа нам дається приз. (Авто, Мото, Телефон, і т.д )
    і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .*/


let game = +prompt("Угадай число - получи приз!!!");

switch (game) {
    case 1:
        alert("Авто")
        break;
    case 2:
        alert("Мото")
        break;
    case 3:
        alert("Телефон")
        break;
    case 4:
        alert("Мозги")
        break;
    case 5:
        alert("Руки")
        break;
    case 6:
        alert("Пирожок")
        break;
    default:
        alert("Повторите ввод заново");
}
