// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

/*
const minNum = (minNum1, minNum2, minNum3) => {
    if (minNum1 <= minNum2 && minNum1 <= minNum3) {
        console.log(minNum1)
    } else if (minNum2 <=minNum1 && minNum2 <= minNum3) {
        console.log(minNum2)
    } else if (minNum3 <= minNum1 && minNum3 <= minNum2) {
        console.log(minNum3)
    }
}

minNum(25, 54,5);*/


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

/*const maxNum = (maxNum1, maxNum2, maxNum3) => {
    if(maxNum1 > maxNum2 && maxNum1 > maxNum3) {
        console.log(maxNum1)
    } else if(maxNum2 > maxNum1 && maxNum2 > maxNum3) {
        console.log(maxNum2)
    } else if (maxNum3 > maxNum1 && maxNum3 > maxNum2) {
        console.log(maxNum3)
    }
}

maxNum(123,456,321);*/


// - створити функцію яка повертає найбільше число з масиву

/*
let maxNum = [324,665,234,8676,3532,9877,350,464,786,2133,7658];

const arrayMaxNumber = (maxNum) => {
    let  numberMax = maxNum[0];
    for (const arrayElement of maxNum) {
        if (arrayElement > numberMax) {
            numberMax = arrayElement;
        }
    }
    return numberMax;
}
// arrayMaxNumber(maxNum)
console.log(arrayMaxNumber(maxNum))*/

/*
- створити функцію яка повертає найменьше число з масиву
*/

/*
let minNum = [324,665,234,8676,3532,9877,350,464,786,2133,7658];

const arrayMinNumber = (minNum) => {
    let numberMin = minNum[0];
    for (const numberMinElement of minNum) {
        if (numberMinElement < numberMin) {
            numberMin = numberMinElement;
        }
    }
    return numberMin;
}
console.log(arrayMinNumber(minNum))
*/

/*
- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
*/

/*
let array = [1,2,10];

const sumNumber = (array) => {
    let sumNumber = 0;
    for (const arrNumElement of array) {
        sumNumber = arrNumElement + sumNumber;
    }
    return sumNumber;
}

console.log(sumNumber(array))*/


/*
- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
*/


/*
let numArr = [100,200,300,400];

const sumArr = (numArr) => {
    let sumArr = 0;
    for (const numArrElement of numArr) {
        sumArr = sumArr + numArrElement;
    }
    return sumArr / numArr.length;
}

console.log(sumArr(numArr))
*/


/*
- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
*/

/*const anyNum = (...array) => {
    let minNum = array[0];
    let maxNum = array[0];

    for (const argument of array) {
        if (argument < minNum) {
            minNum = argument;
        } else if (argument > maxNum) {
            maxNum = argument;
        }
    }
    console.log('Максимальное число: ', maxNum)
    return minNum;

};

console.log(anyNum(265, 655, 2365, 645, 2022, 105, 666, 676, 76));*/


// - створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


/*
const randomNumber = (length) => {
    let numRand = [];
    for (let i = 0; i < length; i++) {
        numRand.push(Math.round(Math.random() * 100))
    }
    return numRand;
}

console.log(randomNumber(9))*/

/*
- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
*/

/*
const randomNumber = (length,limit) => {
    let numRand = [];
    for (let i = 0; i < length; i++) {
        numRand.push(Math.round(Math.random() * limit));
    }
    return numRand;
}

console.log(randomNumber(10,50))
*/

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

/*let array = [1,2,3];

const revers = (arr) => {
    let newArr = [];
    for (let i = arr.length-1; i >= 0; i--) {
       newArr.push(arr[i])
    }
    return newArr;
}

console.log(revers(array))*/
