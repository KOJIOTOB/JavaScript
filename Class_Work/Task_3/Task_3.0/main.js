
/*let array = [2,17,13,6,22,31,45,66,100,-18];   // без изменений*/

/*let arrayBack = [2,17,13,6,22,31,45,66,100,-18];  // в обратном порядке*/

/*1. перебрати його циклом while*/

/*

let i = 0;

while (i < array.length) {
    console.log(array[i]); i++;
}
*/

/*let i = arrayBack.length;

while (i --) {
    console.log(arrayBack[i]);
}*/


/*2. перебрати його циклом for*/

/*

for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}
*/

/*for (let i = arrayBack.length-1; i >= 0; i--) {
    console.log(arrayBack[i])
}*/

/*3. перебрати циклом while та вивести  числа тільки з непарним індексом*/

/*
let i = 0;

while (i < array.length) {
    if (i % 2 === 1) {
        console.log(array[i])
    }
    i++
}
*/

/*let i = arrayBack.length;

while (i--) {
    if (i % 2 === 1) {
        console.log(arrayBack[i])
    }

}*/

/*
4. перебрати циклом for та вивести  числа тільки з непарним індексом*/

/*
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 1) {
        console.log(array[i])
    }
}
*/

/*
for (let i = arrayBack.length-1; i >= 0; i--) {
    if (i % 2 === 1) {
        console.log(arrayBack[i])
    }
        }
*/


/*
5. перебрати циклом while та вивести  числа тільки парні  значення*/

/*
let i = 0;

while (i < array.length) {
    if (i% 2 !== 1) {
        console.log(array[i])
    }
    i++;
}
*/

/*let i = arrayBack.length;

while (i--) {
    if(i % 2 !== 1) {
        console.log(arrayBack[i])
    }
}*/

/*
6. перебрати циклом for та вивести  числа тільки парні  значення*/

/*
for ( let i = 0; i < array.length; i++) {
    if (i% 2 === 0) {
        console.log(array[i])
    }
}
*/

/*for (let i = arrayBack.length-1; i >= 0; i--) {
    if (i % 2 === 0) {
        console.log(arrayBack[i])
    }
}*/


/*
7. замінити кожне число кратне 3 на слово "okten"*/

/*for (let i = 0; i < array.length; i++) {
    if ( array[i]%3 === 0) {
        array[i] = "okten";
        console.log(array)
    }
}*/

/*
for (let i = arrayBack.length-1; i >= 0; i--) {
    if (arrayBack[i]%3 === 0) {
        arrayBack[i] = "okten";
        console.log(arrayBack)
    }
}
*/


/*
8. вивести масив в зворотньому порядку.*/


/*
let arrayBack = [2,17,13,6,22,31,45,66,100,-18];
for (let i = arrayBack.length-1; i >= 0; i--) {
    console.log(arrayBack[i])
}
*/
