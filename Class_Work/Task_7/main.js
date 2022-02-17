//- Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

/*
function Cars (model, year, maxSpeed, volume) {
    this.model = model;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function (msg) {
        return `${msg} їдемо зі швидкістю ${this.maxSpeed}км на годину`
    };
    this.info = function () {
       const information =  {
           model: this.model,
           year: this.year,
           maxSpeed: this.maxSpeed,
           volume: this.volume,
       }
        for (const key in information) {
            console.log(`${key}: ${information[key]}` )
        }
    }

    this.newMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }

    this.changeYear = function (newValue) {
        this.year = this.year = newValue;
    }

}

let addCar = new Cars('BMW',2015, 300,4.4)

console.log(addCar.drive('Ми'));
addCar.info();
addCar.newMaxSpeed(20);
addCar.changeYear(2022);
console.log(addCar.drive('Ми'));
addCar.info();
*/



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// class Cars {
//     constructor(model, year, maxSpeed, volume) {
//         this.model = model;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//     drive () {
//         return `їдемо зі швидкістю ` + this.maxSpeed + `км на годину`;
//     }
//     info () {
//         console.log(`model: ${this.model}, year: ${this.year}, maxSpeed: ${this.maxSpeed}, volume: ${this.volume}`)
//     }
//
//     newMaxSpeed (newSpeed) {
//         this.maxSpeed = this.maxSpeed +newSpeed;
//     }
//
//     changeYear (newValue) {
//         this.year = this.year = newValue;
//     }
//
// }
//
// let cars = new Cars ('BMW', 2015, 300, 4.4);
// console.log(cars);
// console.log(cars.drive());
// cars.info();
// cars.newMaxSpeed(20);
// console.log(cars.drive());
// cars.changeYear(2022);
// cars.info();



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
