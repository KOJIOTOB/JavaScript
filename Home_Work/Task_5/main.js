// Всі функції повинні бути описані стрілочним типом!!!!

//- створити функцію яка обчислює та повертає площу прямокутника

/*
const areaRectangle = (a, b) => {
    let rect = a * b;
    return rect;
}
console.log(areaRectangle(10, 10));*/

//- створити функцію яка обчислює та повертає площу кола

/*
const areaRad = (r) => {
    let radius = r ** 2;
    let xxx = 3.14 * radius;
    return xxx;
}

console.log(areaRad(100))*/

//- створити функцію яка обчислює та повертає площу циліндру

/*
const areaCylinder = (r, h) => {
    let cylinder = 2 * 3.14 * r * h;
    return cylinder;
}

console.log(areaCylinder(20,20));*/

// - створити функцію яка приймає масив та виводить кожен його елемент

/*
let array = [21, 'maks', 23, 'okten', true, false, 22, 'web' ];

const arrayAll = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
arrayAll(array)*/

//- створити функцію яка  створює параграф з текстом. Текст задати через аргумент

/*
const dataP = (paragraf, title) => {
    for (let i = 0; i < 5; i++) {
        document.write(`<h1>${title}</h1>`)
        document.write('<hr>')
        document.write(`<p> ${paragraf} </p>`)
        document.write('<hr>')

    }
}
dataP('ФУНКЦИЯ',' Еще одна функция')*/

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

/*const dataLi = (argument) => {
    document.write(`<ul>`)
        document.write(`<li>${argument}</li>`)
        document.write('<hr>')
        document.write(`<li>${argument}</li>`)
        document.write('<hr>')
        document.write(`<li>${argument}</li>`)
        document.write('<hr>')
    document.write(`</ul>`)
}

dataLi('Okten Web')*/


/*- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/



/*
const dataLi = (text1, text2) => {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text1} - ${text2}</li>`)
        document.write('<hr>')
    }
    document.write(`</ul>`)
}

dataLi('Hallo World', 'Was is Das?')*/

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

/*
let arrayData = [123,'okten',true, 3434, ['new array'], false, 'web', 2022, {} ];

const dataArr = (array) => {
    document.write(`<ul>`)
    for (let i = 0; i < arrayData.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`<ul>`)
}

dataArr(arrayData)*/

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
// 'Для кожного об'єкту окремий блок.


/*
let arrUser = [
    { id: 1, name: "Adolf", age: 90 },
    { id: 2, name: "Viorel", age: 37 },
    { id: 3, name: "Artur", age: 18 },
    { id: 3, name: "Last Pirat", age: 120 },
    { id: 4, name: "Viktor", age: 30 },
    { id: 5, name: "Alona", age: 27 },
    ];

const user = (arrUser) => {
    for (const arrUserElement of arrUser) {
        document.write(`<div>${arrUserElement.id}.${arrUserElement.name} - ${arrUserElement.age}</div> `)
    }
}
user(arrUser);*/
