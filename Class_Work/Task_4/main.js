/*
- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)*/

/*
function numerMinimal(minNum1, minNum2, minNum3) {
    if (minNum1 < minNum2 && minNum1 < minNum3) {
        console.log(minNum1)
    } else if (minNum2 < minNum1 && minNum2 < minNum3) {
        console.log(minNum2)
    } else if (num3 < minNum1 && minNum3 < minNum2) {
        console.log(minNum3)
    } else {
        console.log('Все числа равны')
    }

}

numerMinimal(2021,2022,2023);
*/


/*
- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)*/


/*
function maximalNumer(maxNum1, maxNum2, maxNum3) {
    if(maxNum1 > maxNum2 && maxNum1 > maxNum3) {
        console.log(maxNum1)
    } else if (maxNum2 > maxNum1 && maxNum2 > maxNum3) {
        console.log(maxNum2)
    } else if (maxNum3 > maxNum1 && maxNum3 > maxNum2) {
        console.log(maxNum3)
    } else {
        console.log('Все числа равны')
    }
};

maximalNumer(2021, 2022, 2023);
*/


/*
- створити функцію яка повертає найбільше число з масиву*/

/*
let arrNum = [265, 865, 243, 645, 1991, 34, 666, 76, 66];

function arrMaxNum(arrNum) {
    let arrayNumber = arrNum[0];
    for (const arrayNumberElement of arrNum) {
        if (arrayNumberElement > arrayNumber) {
            arrayNumber = arrayNumberElement;
        }
    }
    return arrayNumber;
}

console.log(arrMaxNum(arrNum));
arrMaxNum(arrNum);

*/

/*
- створити функцію яка повертає найменьше число з масиву*/


/*
let arrayNum = [265, 865, 243, 645, 1991, 34, 666, 76, 66];

function arrMinNum(arrayNum) {
    let arrNumber = arrayNum[0];
    for (const arrNumberElement of arrayNum) {
        if (arrNumberElement < arrNumber) {
            arrNumber = arrNumberElement;
        }
    }
    return arrNumber;
}

console.log(arrMinNum(arrayNum));

arrMinNum(arrayNum);
*/


/*
- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
 Приклад [1,2,10]->13
*/

/*
let arr = [1,2,10];

function sumNumb (arr) {
let sumNumb = 0;
    for (const arrElement of arr) {
        sumNumb = arrElement + sumNumb;
    }
    return sumNumb;
};

console.log(sumNumb(arr));
sumNumb(arr);*/


/*
- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
*/

/*let numMidl = [10,20,30,40];

function sumMidlNum(numMidl) {
    let sumMidlNum = 0;
    for (const numMidlElement of numMidl) {
        sumMidlNum = sumMidlNum + numMidlElement;
    }
    return sumMidlNum / numMidl.length;
};
console.log(sumMidlNum(numMidl));*/


/*
- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше.
(Math використовувати заборонено);*/


/*
function anyNum() {
    let minNum = arguments[0];
    let maxNum = arguments[0];

    for (const argument of arguments) {
        if (argument < minNum) {
            minNum = argument;
        } else if (argument > maxNum) {
            maxNum = argument;
        }
    }
    console.log('maxNum: ', maxNum)
    return minNum;
};

console.log(anyNum(265, 65, 23, 645, 2022, 10, 666, 76, 6));*/



/*
створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.*/

/*function randomNumber(length) {
    let numRandom = [];
    for (let i = 0; i < length; i++) {
        numRandom.push(Math.round(Math.random()*100));
    }
    return numRandom;
}

console.log(randomNumber(9));*/


/*
- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
 який характеризує кінцеве значення діапазону.
*/


/*function randomNum(length,limit) {
    let numNoLimit = [];
    for (let i = 0; i < length; i++) {
        numNoLimit.push(Math.round(Math.random() * limit));
    }
    return numNoLimit;
}

console.log(randomNum(5,100))*/



/*
- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].*/

/*
let arrRevers = [1,2,3];

function reverse(arrr) {
    const newArr = []
    for (let i = arrr.length - 1; i >= 0; i--) {
        newArr.push(arrr[i])
    }
    return newArr;
}

console.log(reverse(arrRevers));*/
