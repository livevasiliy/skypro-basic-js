// Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

// Задание 2
let yearFirstIPhone = 2007;
alert('Год выпуска первого iPhone: ' + yearFirstIPhone);

// Задание 3
let creatorJavascript = "Брендон Айк";
alert('Имя создателя Javascript: ' + creatorJavascript);

// Задание 4
let firstNumber = 10;
let secondNumber = 2;
let result = firstNumber + secondNumber;
alert('10 + 2 = ' + result);
result = firstNumber - secondNumber;
alert('10 - 2 = ' + result);
result = firstNumber * secondNumber;
alert('10 * 2 = ' + result);
result = firstNumber / secondNumber;
alert('10 / 2 = ' + result);

// Задание 5
result = 2**5;
alert('2 в 5-ой степени = ' + result);

// Задание 6
a = 9;
b = 2;
alert('Остаток от деления 9 / 2 = ' + 9 % 2);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// Задание 8
let age = Number.parseInt(prompt("Сколько вам лет?"));
alert("Вам " + age + " лет");

// Задание 9.0
let user = {
    name: "Василий",
    age: 25,
    isAdmin: true
}
// Задание 9.1
user['city of residence'] = 'Астрахань';
// Задание 9.2
user.age = 26;
// Задание 9.3
delete user['city of residence'];
// Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);
// Задание 10
let name = prompt("Как вас зовут ?");
alert(`Привет, ${name}!`);