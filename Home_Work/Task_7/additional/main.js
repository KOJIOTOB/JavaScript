// Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

class User {
    constructor(id, name, username, email, address, street, suite, city, zipcode, geo, lat, lng, phone, website, company, companyName, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {};
        this.address.street = street;
        this.address.suite = suite;
        this.address.city = city;
        this.address.zipcode = zipcode;
        this.address.geo = {};
        this.address.geo.lat = lat;
        this.address.geo.lng = lng;
        this.phone = phone;
        this.website = website;
        this.company = {};
        this.company.companyName = companyName;
        this.company.catchPhrase = catchPhrase;
        this.company.bs = bs;
    }
}



let objUser = [
        new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', '',
        'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '', '-37.3159',
        '81.1496', '1-770-736-8031 x56442', 'hildegard.org', '', 'Romaguera-Crona',
        'Multi-layered client-server neural-net', 'harness real-time e-markets'),
];

console.log(objUser);