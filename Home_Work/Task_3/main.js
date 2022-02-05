/*
--створити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль
*/

/*let array = ['number', 'string', 'all'];
number = [12, 43, 54, 23, 99]
string = ['Okten', 'Vasya', 'JavaScript', 'React', 'iPhone']
all = [144, 'Martchelo', 'Work', 2022, true]
console.log(number, string, all)*/



/*-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
 Вивести в консоль*/

/*
let array = [];
array[0] = 'BMW G30 M550i';
array[1] = 'Audi S7 S-Line';
array[2] = 'Porsche Taycan';
array[3] = 'Mercedes-Benz G 63 AMG';
array[4] = 'Alfa Romeo Giulia';


console.log(array);
document.write(array);*/


/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині*/


/*for (let i = 0; i <10; i++) {
    document.write(`<div>Okten School</div>`);
}*/

/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині*/

/*
for (let i = 0; i <10; i++)
    document.write(`<div>${i} Okten School</div>`)*/

/*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/

/*
for (let i = 0; i <20; i++) {
    document.write(`<h1>Okten School</h1>`)
}*/

/*let h = 0;
while (h<20) {
    document.write(`<h1>Okten School</h1>`)
    h++;
}*/

/*
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*/

/*
let hh = 0;
while (hh<20) {
    document.write(`<h1>${hh} - Okten School</h1>`)
    hh++;
}*/


/*- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.*/

/*
let num = [123, 232, 543, 3, 344, 5, 890, 107, 1991, 2022];
for (i = 0; i < num.length;i++) {
    console.log(num[i])
}
*/


/*- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.*/

/*
let str = ['was ist das', 'das ist js', 'wo bist du', 'first', 'last', 'laptop', 'handy', 'maus', 'work', 'speaking'];
for (let i = 0; i < str.length;i++) {
    console.log(str[i])
}
*/


/*- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.*/

/*
let arr = [123, 'school', {}, false, 32, true,'okten', 343,'time', 'coffee'];
for (i = 0; i < arr.length;i++) {
    console.log(arr[i])
}
*/



/*- Створити масив з 10 елементів числового, стірчкового і булевого типу.
   За допомогою if та typeof вивести тільки булеві елементи*/

/*let arr = [123, 'school', {}, false, 32, true,'okten', 343,'time', 'coffee'];
for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'boolean') {
        console.log(arr[i])
    }
}*/


/*- Створити масив з 10 елементів числового, стірчкового і булевого типу.
  За допомогою if та typeof вивести тільки числові елемент*/

/*let arr = [123, 'school', {}, false, 32, true,'okten', 343,'time', 'coffee'];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        console.log(arr[i])
    }
}*/


/*- Створити масив з 10 елементів числового, стрічкового і булевого типу.
 За допомогою if та typeof вивести тільки рядкові елементи*/

/*
let arr = [123, 'school', {}, false, 32, true,'okten', 343,'time', 'coffee'];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
        console.log(arr[i])
    }
}
*/


/*- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
 Вивести в консоль всі його елементи в циклі.*/

/*let allArray = [];
allArray[0]= 'okten';
allArray[1]= {};
allArray[2]= 1991;
allArray[3]= true;
allArray[4]= 777;
allArray[5]= 'maus';
allArray[6]= false;
allArray[7]= 2022;
allArray[8]= {};
allArray[9]= 'raus';

for (let i = 0; i < allArray.length; i++) {
    console.log(allArray[i]);
}*/


/*
- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write*/

/*
for (let i = 0; i < 10; i++) {
    console.log('шаг: '+ i +'');
    document.write('шаг: '+ i +'');
}
*/


/*
- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write*/

/*
for (let i = 0; i < 100; i++) {
    console.log('шаг: '+ i +'');
    document.write('шаг: '+ i +'');
}
*/

/*- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write*/

/*
for (let i = 0; i < 100; i+=2) {
    console.log('шаг: '+ i +'')
    document.write('шаг: '+ i +'');
}
*/

/*
- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write*/

/*for (let i = 0; i < 100; i+=2) {
        console.log('парное '+ i +'')
        document.write('парное: '+ i +'');
}*/


/*
for (let i = 0; i < 100; i++) {
    if(i% 2 === 0) {
    console.log('парное число '+ i +'')
    document.write('парное: '+ i +'');
}
}*/


/*
- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write*/

/*
for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log('не парное число ' + i + '')
        document.write('не парное: ' + i + '');
    }
}
*/

