// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

// a) додає клас з назвою групи, елементу з ід main_header

let main_header = document.getElementById('main_header');
//console.log(main_header)
main_header.innerText = 'Okten School';

// b) робить шириниу елементу ul 400px

let ul = document.getElementsByTagName('ul');
//console.log(ul)
ul[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let linkList = document.getElementsByClassName('linkList');
//console.log(linkList)
for (const linkListElement of linkList) {
    linkListElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

let listElement2 = document.getElementsByClassName('listElement2');
// console.log(listElement2)
listElement2[0].innerHTML = `<a href = "https://owu.com.ua/">OKTEN ШКОЛА</a>`;

// e) отримує всі елементи li та змінює ім колір фону на сірий

let liAll = document.getElementsByTagName('li');
// console.log(li);
for (const liAllElement of liAll) {
    liAllElement.style.background = 'grey';
    liAllElement.style.marginTop = '5px';
    liAllElement.style.listStyleType = 'none';
    liAllElement.style.fontSize = '18px';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

// let aAll = document.getElementsByTagName('a');
// //console.log(aAll)
// for (const aAllElement of aAll) {
//     aAllElement.style.textDecoration = 'none';
//     aAllElement.style.color = 'black';
//     aAllElement.classList.add('anchor');
// }
//console.log(aAll);

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let aAll = document.getElementsByTagName('a');
// //console.log(aAll)
// for (const aAllElement of aAll) {
//     aAllElement.style.textDecoration = 'none';
//     aAllElement.style.color = 'black';
//     aAllElement.classList.add('anchor');
//     if (aAllElement.innerText === 'link3') {
//         aAllElement.style.fontSize = '40px'
//     }
//     let addClass = aAllElement.innerText
//     aAllElement.classList.add(`element_A`)
// }
//console.log(aAll);

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let aAll = document.getElementsByTagName('a');
//console.log(aAll)
for (const aAllElement of aAll) {
    aAllElement.style.textDecoration = 'none';
    aAllElement.style.color = 'black';
    aAllElement.classList.add('anchor');
    if (aAllElement.innerText === 'link3') {
        aAllElement.style.fontSize = '40px'
    }
    let element_A = aAllElement.innerText
    aAllElement.classList.add('element_A');
}
//console.log(aAll)

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let subHeader = document.getElementsByClassName('sub-header');
// for (const subHeaderElement of subHeader) {
//     subHeaderElement.style.background = prompt('Выбери цвет фона: (grey, silver, red, green)')
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

/*
let subHeader = document.getElementsByClassName('sub-header');
for (const subHeaderElement of subHeader) {
    if (subHeaderElement.innerText === 'content 2 segment') {
        subHeaderElement.style.color = prompt('Выбери цвет текста: (grey, silver, red, green)');
    }
}*/

//k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()

// let content_1 = document.getElementsByClassName('content_1');
// content_1[0].innerText = prompt('Ваш довiдьний текст');

// l) отримати елементи p та змінити їм padding на 20px

let el_P = document.getElementsByTagName('p')
for (const elementP of el_P) {
    elementP.style.padding = '20px';
    elementP.style.border = '1px solid red';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let textP = document.getElementsByClassName('text2');
textP[0].innerText = 'sep-2021';

