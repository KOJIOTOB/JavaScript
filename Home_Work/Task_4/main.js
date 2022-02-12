/*
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
*/

/*function areaRectangle(a, b) {
    let rect = a * b;
    return rect;
}

console.log(areaRectangle(50,50))*/

/*
- створити функцію яка обчислює та повертає площу кола з радіусом r
*/

/*function areaRad(r) {
    let radius = r ** 2;
    let xxx = 3.14 * radius;
    return xxx;
}

console.log(areaRad(10))*/


/*
- створити функцію яка обчислює та повертає площу циліндру S= 2πRH
*/

/*
function areaCylinder(r, h) {
    let cylinder = 2 * 3.14 * r * h;
    return cylinder;
}

console.log(areaCylinder(10,10))
document.write('Площадь цылиндра ' + areaCylinder(10,10));*/

/*
- створити функцію яка приймає масив та виводить кожен його елемент
*/

/*let array = [12,32,65,878,234,12312,787,43535,54];
function arrNum(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
arrNum(array)*/


/*
створити функцію яка створює параграф з текстом.
Текст задати через аргумент
*/

/*function dataP (paragraf) {
   for (let i = 0; i <= 50; i++) {
       document.write(`<p> ${paragraf}</p>`)
   }
}

dataP('okten'); */

/*
створити функцію яка створює ul з трьома елементами li.
Текст li задати через аргумент всім однаковий */

/*
function createThreeli (arg) {
    document.write(`<ul>`)
    document.write(`<li>${arg}</li>`)
    document.write(`<li>${arg}</li>`)
    document.write(`<li>${arg}</li>`)
    document.write(`</ul>`)
}
 createThreeli('text element');
*/

/*
створити функцію яка створює ul з трьома елементами li.
 Текст li задати через аргумент всім однаковий.
 Кількість li визначається другим аргументом,
 який є числовим (тут використовувати цикл)
*/


/* function createThreeLi(text, number) {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
           document.write(`<hr>`)

    }
 document.write(`</ul>`)
}

 createThreeLi('text',3);*/


/*створити функцію яка приймає масив примітивних елементів
(числа,стрінги,булеві), та будує для них список*/

/*
let arrayAll = [212,'Okten School', 453, true, false, 'Asus', 'Apple'];

function arrAll (array) {
    document.write(`<ul>`)
    for(let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
        document.write(`<hr>`)
    }
    document.write(`</ul>`)
}
arrAll(arrayAll);
*/


/*
створити функцію яка приймає масив об'єктів з наступними полями
id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
*/

/*
let arrayUsers = [
  { id: 1, name: "Adolf", age: 90 },
  { id: 2, name: "Viorel", age: 37 },
  { id: 3, name: "Artur", age: 18 },
  { id: 3, name: "Last Pirat", age: 120 },
  { id: 4, name: "Viktor", age: 30 },
  { id: 5, name: "Alona", age: 27 },
];

function dataUser(arrUser) {
  for (const arrUserElement of arrUser) {
    document.write(
      `<div>${arrUserElement.id}.${arrUserElement.name} - ${arrUserElement.age}<hr></div>`
    );
  }
}
dataUser(arrayUsers);
*/
