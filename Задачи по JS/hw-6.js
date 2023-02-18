let numbers = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 0) break;
    console.log(numbers[i]);
}
// Задача 2
const numbs = [1, 5, 4, 10, 0, 3]
const positionNumb = numbs.indexOf(4);
console.log(`Позиция числа - ${positionNumb}`);
// Задача 3
let arrNumb = [1, 3, 5, 10, 20]
arrNumb = arrNumb.join('');
console.log(arrNumb);
// Задача 4
const arr = []
const newArr = []
for (let n = 0; n < 10; n++) {
    arr.push(Math.round(Math.random() * 10));
}
console.log(arr);
arr.forEach(element => {
    if (element % 2 === 0) {
        newArr.push(element);
    }
});
console.log(newArr);
// Задача 5
let firstArr = []
for (let i = 0; i < 3; i++) {
    let secondArr = []
    for (let u = 0; u < 3; u++) {
        secondArr.push(1);

    }
    firstArr.push(secondArr);
}
console.log(firstArr);
// Задача 6
const one = [1, 1, 1]
for (let index = 1; index < 4; index++) {
    one.push(2);

}
console.log(one);
// Задача 7
const arraySort = [9, 8, 7, 'a', 6, 5]
arraySort.sort();
console.log(arraySort);
arraySort.pop();
console.log(arraySort);
// Задача 8
const checkNumbers = [9, 8, 7, 6, 5]
let userNumber = Number(prompt('Введите число'));
let result = checkNumbers.includes(userNumber);
console.log(result);
// задача 9
let text = 'abcdef';
let textSplit = text.split('');
textSplit.reverse();
let textJoin = textSplit.join();
console.log(textJoin);
// Задача 10


let arrayRandom = [];

for (let v = 0; v < 6; v++) {
    arrayRandom.push(Math.floor(Math.random() * 10 + 1));
}
console.log(arrayRandom);

let total = 0;

for (let v = 0; v < arrayRandom.length; v++) {
    total += arrayRandom[v];
}

let average = total / arrayRandom.length;

console.log(`Среднее арифметическое равно ${average}`);

// Задача 11

const arrSplit = [[1, 2, 3,], [4, 5, 6]];
const arrFlat = arrSplit.flat()
console.log(arrFlat);

// Задача 12

let arrSum = [];
for (let i = 1; i <= 10; i++) {
    arrSum.push(Math.floor(Math.random() * 10 + 1));
}
console.log(arrSum);

for (let i = 0; i < arrSum.length; i++) {

    if (i < arrSum.length - 1) {

        let sum = arrSum[i] + arrSum[i + 1];
        console.log(`Сумма элементов по индексам ${i} и ${i + 1}: ${sum}`);
    }
};