/*
1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
   Скласти результат цих чисел в змінній result.
*/

const array = [1,2,3,4,5,6,7,8,9,10];
let result = array[0] + array[1] + array[2] + array[3] + array[4] + array[5]
    + array[6] + array[7] + array[8] + array[9];
console.log(result);


/*
2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр*/

/*let bookJs1 = {
    title: "JavaScript для детей",
    pages: 288,
    genre: "Cамоучитель по программированию"
};
console.log(bookJs1);
*/


/*
3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
*/
/*
let bookJs2 = {
    title: "JavaScript для детей",
    pages: 288,
    genre: "Cамоучитель по программированию",
    author: "Ник Морган"
};
console.log(bookJs2);
*/



/*
4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
   Вивести кожну книгу як окремий об'єкт
*/

/*
const arr = [
    {
        title: "JavaScript для детей",
        pages: 288,
        genre: "Cамоучитель по программированию",
        author: "Ник Морган",
    },
    {
        title: "JavaScript",
        pages: 388,
        genre: "Cамоучитель"
    },
    {
        title: "JavaScript Okten",
        pages: 88,
        genre: "Cамоучитель по программированию"
    }
];
console.log(arr[0]);
*/

/*5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
Значення площі зберігати в змінній s.*/

/*
let height = 23;
let width = 10;

let s = height * width;
console.log(s)
*/

/*
6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
результат помістіть у змінну v.
*/

/*
let heightC = 10;
let dC = 4;
let s = Math.PI * (dC / 2) ** 2 * heightC;
console.log(s)
*/


/*7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
Знайдіть гіпотенузу k за теоремою Піфагора
(потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).*/

/*let n = 3
let m = 4

//let k = Math.sqrt((n**2 + m**2))

let k = Math.sqrt((Math.pow(n, 2) + Math.pow(m, 2)))

alert(k);*/

