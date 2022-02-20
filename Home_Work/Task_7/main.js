
/*
 Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
 створити пустий масив, наповнити його 10 об'єктами new User(....)
*/

/*
class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
*/

/*
let arrayUser = [
    new User ('22', 'Dr.John', 'Smith', 'qwerty@gmail.ua', 2131231231),
    new User ('33', 'Ryan', 'Anderson', 'ffff@gmail.ua', 32424242423),
    new User ('11', 'Jamal', 'Johnson', 'qasda@gmail.ua', 123451231890),
    new User ('99', 'Omar', 'Williams', 'qttty@gmail.ua', 1234567890),
    new User ('100', 'Adam', 'Jones', 'qweasdas@gmail.ua', 1234567890),
    new User ('66', 'Ivan', 'Brown', 'uuty@gmail.ua', 2342778342),
    new User ('77', 'Federico', 'Davis', 'quiuy@gmail.ua', 89879788978),
    new User ('88', 'Roxy', 'Miller', 'uiy@gmail.ua', 546456456),
    new User ('44', 'Elvis', 'Wilson', 'qtry@gmail.ua', 655464646),
    new User ('55', 'Eric', 'Taylor', 'qweer@gmail.ua', 8979789789),
];
*/

//console.log(arrayUser);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

/*let filterUser = arrayUser.filter((item) => {
    if (item.id % 2 === 0){
        return item
    }});*/
//console.log(filterUser);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

//console.log(arrayUser.sort((a,b) => a.id - b.id))

// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

/*class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}*/

/*let arrayProduct = [
    new Client(2, 'Rozetka', 'Nutrition', 'rozetka@gmail.ua', 380123456789, ['Nutella', 'Korona', 'Coca-Cola']),
    new Client(4, 'Stylus', 'Accessories', 'stylus@gmail.ua', 380123456789, ['Handy', 'Lampa', 'Stylus', 'Sharp 32', 'LG 75', 'Wi-Fi modem']),
    new Client(6, 'Eco-Market', 'Nutrition', 'eco-market@gmail.ua', 380123456789, ['Hennesy', 'Butter']),
    new Client(1, 'Citrus', 'Electronics', 'citrus@gmail.ua', 380123456789, ['Kivi 55']),
    new Client(3, 'Apple', 'Electronics', 'apple@gmail.ua', 380123456789, ['MacBook 14 Pro 2022', 'iPhone 14', 'iPad Air', 'iPhone 15 mini']),
    new Client(10, 'Samsung', 'Electronics', 'samsung@gmail.ua', 380123456789, ['Samsung S22 Ultra', 'Samsung Oled 75', 'Samsung S12']),
    new Client(7, 'Avon', 'Сhemistry', 'avon@gmail.ua', 380123456789, ['Egoist', 'Pandora']),
    new Client(9, 'Comfy', 'Electronics', 'comfy@gmail.ua', 380123456789, [ 'Cooler', 'Microwaveable']),
    new Client(8, 'Vodafone', 'Accessories', 'vodafone@gmail.ua', 380123456789, ['e-sim']),
    new Client(5, 'Foxtrot', 'Electronics', 'foxtrot@gmail.ua', 380123456789, ['Fridge', 'Kettle']),
];*/
// console.log(arrayProduct);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

/*
console.log(arrayProduct.sort((a,b) => a.order.length - b.order.length));*/
