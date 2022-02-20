// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :


// -- отримує текст з параграфа з id "content"

 let contentId = document.getElementById('content');
// console.log(contentId);

// -- отримує текст з блоку з id "rules"

let rules = document.getElementById('rules');
console.log(rules);

// -- замініть текст параграфа з id 'content' на будь-який інший

contentId.innerText = 'будь-який текст';

// -- замініть текст параграфа з id 'rules' на будь-який інший

rules.innerText = 'Новий Текст';

// -- змініть кожному елементу колір фону на червоний

// let allElementRed = document.body.children;
// for (const allElementRedElement of allElementRed) {
//     allElementRedElement.style.background = 'red';
//     allElementRedElement.style.color = 'white'
// }

// -- змініть кожному елементу колір тексту на синій

// let allElementBlue = document.body.children;
// for (const allElementBlueElement of allElementBlue) {
//     allElementBlueElement.style.background = 'blue';
//     allElementBlueElement.style.color = 'tomato'
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

//let idRules = document.getElementById('rules');
//console.log(idRules.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// let fc_rules = document.getElementsByClassName('fc_rules');
// for (const fcRule of fc_rules) {
//     fcRule.style.color = 'red'
// }