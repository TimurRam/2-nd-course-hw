let hello = 1;
while (hello <= 2) {
    console.log('Привет!')
    hello++
}
// задачка 2
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
// Задача 3
let number = 7;
while (number >= 7 && number <= 22) {
    console.log(number);
    number++;
}
// Задача 4
let employee = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
};
for (let key in employee) {
    console.log(`'${key} - зарплата ${employee[key]} долларов'`);

        }
    // Задача 5
        for (let u = 1000, numb = 1; u > 50; numb++) {
        u /= 2;
        console.log(`Получилось число = ${u}`);
        console.log(`количество итераций - ${numb}`);
    }
    // Вариант 2
    let n = 1000;
    let num = 0;
    while (n >= 50) {
        n /= 2;
        num++
    }
    console.log(`Получилось число = ${n}`);
    console.log(`количество итераций - ${num}`);
// Задачка 6
    let friday = 6;
    for (let day = friday; day <= 31; day += 7) {

        console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
    }
