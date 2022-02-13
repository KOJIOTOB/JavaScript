/*- Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд*/

/*
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

const name = (string, symbol) => {
    let arr = [];
    if (string.includes(symbol)) {
        let sing = string.split(symbol)
        sing.forEach((item) => {
            if (item) arr.push(item);
        })
        console.log(arr.join(' '))
    }
};
name(n1,'.');
name(n2,'-');
name(n3,'_');*/

//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

/*
const random = (length, number) => {
    let emptyArr = [];
    for (let i = 0; i < length; i++) {
        emptyArr.push(Math.floor(Math.random() * number));
    }
    return emptyArr;
}

let result = random(5, 100);
console.log(result);*/


//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

/*
const randomSort = (length, number) => {
    let emptyArr = [];
    for (let i = 0; i < length; i++) {
        emptyArr.push(Math.floor(Math.random() * number));
    }
    return emptyArr.sort((a, b) => a - b);
}
console.log(randomSort(5,100));
*/


//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

/*
const randomFilter = (length, number) => {
    let emptyArr = [];
    for (let i = 0; i < length; i++) {
        emptyArr.push(Math.floor(Math.random() * number))
    }
    return emptyArr.filter(value => value % 2 === 0);
}
console.log(randomFilter(10, 100));*/

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
//   за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

/*
const randomArr = (length, number) => {
    let emptyArr = [];
    for (let i = 0; i < length; i++) {
     emptyArr.push(Math.floor(Math.random() * number))
    }
    return emptyArr.map(value => value.toString());
}
console.log(randomArr(10,100));*/


//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//let nums = [11,21,3];

/*let sortNums = (array, direction) => {
    if (direction === 'directing1') return array.sort((a, b) => a - b);
    if (direction === 'directing2') return  array.sort((a, b) => b - a);
}

console.log(sortNums([11,21,3], 'directing1'));
console.log(sortNums([11,21,3], 'directing2'));*/

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


/*
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
    ];
*/

/*
let sortCourses = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sortCourses);
*/

/*let filterCourses = coursesAndDurationArray.filter((value) => {
    return value.monthDuration > 5;
});
console.log(filterCourses)*/
