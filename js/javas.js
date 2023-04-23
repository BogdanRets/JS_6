/*Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я), surname (прізвище),
rate (ставка за день роботи), days (кількість відпрацьованих днів).
Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
Зарплата - це добуток (множення) ставки rate на кількість відпрацьованих днів days.*/

document.write(`<h1>Завдання №1</h1>`);


function Worker(name, surname, rate, days) {
    this.name = name;
    this.surname = surname; 
    this.rate = rate;
    this.days = days;

    this.getSalary = () => {
        return document.write(`Заробітня плата працівника ${name} ${surname} = ${days * rate} грн.<br> Кількість відпрацьованих днів: ${days}<br>=====<br>`)
    }
}

const dorosh = new Worker(`Рустам`, `Дорош`, `950`, `22`);
const hydenko = new Worker(`Олег`, `Худенко`, `1200`, `20`);
const torko = new Worker(`Вадим`, `Торко`, `3000`, `18`)

dorosh.getSalary();
hydenko.getSalary();
torko.getSalary();


/*Реалізуйте клас MyString, який матиме такі методи: метод reverse(),
який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(),
який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.*/


document.write(`<h1>Завдання №2</h1>`);

function MyString() {

    this.reverse = (string) => {
        return string.split(``).reverse(``).join(``)
    }

    this.ucFirst = (string) => {
        return (string.slice(0,1).toUpperCase() + string.slice(1));
    }

    this.ucWords = (string) => {
        return string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(` `)
    }

}

const string1 = `5 4 3 2 1`;
const string2 = `checking this offer`;
const string3 = `new string to test`;

document.write(new MyString().reverse(string1) + `<br>`);
document.write(new MyString().ucFirst(string2) + `<br>`);
document.write(new MyString().ucWords(string3));
