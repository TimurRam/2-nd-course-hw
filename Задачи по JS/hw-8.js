
// // Задача 1
function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }
    return sum;
}


function arrMult(arr) {
    let mult = 1;
    for (let m = 0; m < arr.length; m++) {
        mult *= arr[m];

    }
    return mult;
}

const getResault = (arr, callback) => callback(arr);
// function getResault(arr,callback) {
//    let resault = callback(arr);
//     return resault;
// }


console.log(getResault([7, 11, 5, 3], arrSum));
console.log(getResault([3, 5, 1, 9, 6], arrMult));
// // Задача 2
const users = [
    { name: 'Jon', age: 22 },
    { name: 'Richard', age: 18 },
    { name: 'Anton', age: 32 },
    { name: 'Lida', age: 23 },
    { name: 'Bob', age: 44 },
    { name: 'Vasia Ded', age: 99 }
];
// const arrSort = (a, b) => {
//     if (a.age < b.age) return -1;
//     if (a.age > b.age) return 1;
//     return 0;
// }
const arrSort = (a, b) => a.age - b.age
    

users.sort(arrSort);
console.log(users);
// Задача 3 
// const arr = [1, '4', 9, 'two', 'false', 7, 'true'];
// const arr1 = [1, '4', false, 9, 'two']
// function arrReverse(arr) {
//     arr.reverse();
//     return arr;
// }
// function toNumberArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != Number) arr[i] = Number(arr[i]);
//         if (isNaN(arr[i])) arr.splice(i, 1);

//     }
//     return arr;

// }

// const each = (arr, call) => call(arr);
// console.log(each(arr, arrReverse));
// console.log(each(arr1, toNumberArr));


