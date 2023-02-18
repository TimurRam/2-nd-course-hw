let str = 'js'.toUpperCase();
console.log(str);
// Задача 2 

const sundry = ['Корова', 'Корона', 'Киркоров', 'Самокат', 'Ёж', 'Рыбалка', 'Косяк'];
const search = 'ко';
const searchStart = [];
sundry.forEach((item) => {
    if (item.toLowerCase().startsWith(search.toLowerCase())) {
        searchStart.push(item)
    }
});
console.log(searchStart);
// Задача 3
let number = 32.58884;
let numberFloor = Math.floor(number) 
console.log(numberFloor);
let numberCeil = Math.ceil(number);
console.log(numberCeil);
let numberRound = Math.round(number);
console.log(numberRound);
// задача 4
const numbs = [52, 53, 49, 77, 21, 32];
const maxNumber = Math.max(...numbs);
const minNumber = Math.min(...numbs);
console.log(`Максимальное число ${maxNumber}`);
console.log(`Минимальное число ${minNumber}`);
// Задача 5
function RandomNumber(min,max) {
 let numbs = min + Math.random() * (max - min);
 console.log(Math.floor(numbs));   
}
    RandomNumber(1,11)
// Задача 6


function getRandomArrNumbers(user) {
    let arr = [];
    for (let n = 0; n < user; n++) {
        arr.push(Math.floor(Math.random() * 10));
    }
    arr.length = Math.floor(user / 2);
    console.log(arr);
}
getRandomArrNumbers(7);
// Задача 7
const anyNumber = (min,max) => {
   let numeric = min + Math.floor(Math.random()*(max-min+1));
   console.log(numeric);
}
anyNumber(1,10);
// Задача 8
let todayDate = new Date();
console.log(todayDate);
// Задача 9 
let dayAgo = 73;
let currentDate = new Date();
console.log(currentDate);
let currentDay = currentDate.getDate() + dayAgo;
let newDate = currentDate.setDate(currentDay);
let newDateAgo = new Date(newDate)
console.log(`Через 73 дня будет ${newDateAgo}`);
// Задача 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const myDate = new Date();

const funcData = (date) => {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const russianDate = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " - это " + days[date.getDay()];
    const result = (`Сегодня: ${russianDate} \nвремя: ${hour}:${minute}:${second}`);
    return result;
}
console.log(funcData(myDate));
