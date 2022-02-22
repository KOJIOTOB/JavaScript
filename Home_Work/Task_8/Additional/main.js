//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль


let allList = document.getElementsByClassName('rules')
console.log(allList)
for (const allListElement of allList) {
    console.log(allListElement.classList)
    //console.log(allListElement.className)
}

