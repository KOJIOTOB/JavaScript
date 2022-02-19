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


/*
class Cinderella {
    constructor (name, age, sizeFoot) {
        this.name = name;
        this.age = age;
        this.sizeFoot = sizeFoot;
    }
}

    const arrayCinderella = [
        new Cinderella('Anna', 30, 38),
        new Cinderella('Storm', 22, 43),
        new Cinderella('Olga', 18, 40),
        new Cinderella('Vika', 21, 37),
        new Cinderella('Natasha', 23, 36),
        new Cinderella('Maria', 28, 38),
        new Cinderella('Sara', 21, 42),
        new Cinderella('Fiona', 18, 45),
        new Cinderella('Pomidora', 19, 41),
        new Cinderella('Amelia', 25, 39),
    ];
   // console.log(arrayCinderella);

    class PrinceData {
       constructor (name, age, shoes) {
        this.name = name;
        this.age = age;
        this.shoes = shoes;
       }
}

const prince = new PrinceData('Shrek', 20, 45);
//console.log(prince);

    const findShoes = (arrayCinderella, prince) => {
        for (const arrayCinderellaElement of arrayCinderella) {
            if (arrayCinderellaElement.sizeFoot === prince.shoes) {
                return `Любий ${prince.name} вітаємо, це твоя попелюшка ${arrayCinderellaElement.name} iз ${arrayCinderellaElement.sizeFoot} розiром туфлi =) `
            }
        }
};
console.log(findShoes(arrayCinderella, prince))

const searchCinderella = arrayCinderella.find((item) => item.sizeFoot === prince.shoes);

//console.log(searchCinderella);*/
