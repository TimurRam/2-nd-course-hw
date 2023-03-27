
function number(a, b) {
    if (a < b) {
        return (`Наименьшее число ${a}`);
    }
    else if (a > b) {
        return (`Наименьшее число ${b}`);
    }
    else {
        return (`Число равно ${a}`);
    }
}
console.log(number(12, 11));

// Задача 2

function numeric(digit) {
    if (isNaN(digit)) {
        return ('Это не число')

    } else if (digit % 2 === 0) {
        return ('Число четное')
    }
    else {
        return ('Число не четное')
    }
}
console.log(numeric(4));
// Задача 3
const square = (a) => {
    console.log(a ** 2);
}
square(2);
// 3.2

const squareNumber = (a) => {
    return a ** 2;
}
console.log(squareNumber(4));
// Задача 4 

function age(question) {
    let age = Number(prompt(question));
    if (age < 0) {
        alert('Вы ввели неправильное значение.');
    } else if (age <= 12) {
        alert('Привет, друг!');
    }
    else {
        alert('Добро пожаловать!');
    }
}
age('Сколько Вам лет?');
// Задача 5
const number1 = prompt('Введите первое число');
const number2 = prompt('Введите второе число');
const twoNumber = () => {
    if ((isNaN(number1)) || (isNaN(number2))) {
        return alert('Одно или оба значения не являются числом');
    } else {

        return alert(number1 * number2);
    }
}
twoNumber();

// Задача 6
const correctNumber = prompt('Введите число');
function differentNumbers() {
    if (!isNaN(correctNumber)) {

        return console.log(`${correctNumber} в кубе равняется ${correctNumber ** 3}`);

    } else {
        return console.log('Переданный параметр не является числом')
    }
}
differentNumbers();


