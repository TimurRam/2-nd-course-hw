function seasons(userNumber = Number(prompt('Введите число от 1 до 12'))) {
    if (isNaN(userNumber)) {
        alert('Это не число')
    } else {
        switch (userNumber) {
            case 1:
            case 2:
            case 12:
                alert('Зима')
                break;
            case 3:
            case 4:
            case 5:
                alert('Весна')
                break;
            case 6:
            case 7:
            case 8:
                alert('Лето')
                break;
            case 9:
            case 10:
            case 11:
                alert('Осень')
                break;
            default:
                alert('Только числа от 1 до 12')
                break;
        }
    }
}
const words = () => {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);


    words.forEach(words => alert(words));
    const firstWord = prompt("Какое было первое слово?");
    const lastWord = prompt("Какое было последнее слово?");

    if (firstWord.toLowerCase() === words[0].toLowerCase() && lastWord.toLowerCase() === words[6].toLowerCase()) {
        alert("Поздравляю, вы угадали оба слова!");
        return;
    } else if (firstWord.toLowerCase() === words[0].toLowerCase() || lastWord.toLowerCase() === words[6].toLowerCase()) {
        alert("Вы были близки к победе!");
        return;
    } else {
        alert("Вы ответили неверно.");
    }
}