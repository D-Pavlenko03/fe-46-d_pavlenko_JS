// NORMAL level

// Task 1 💻
// Создайте переменные, затем сложите их и выведите результат в консоль разработчика.

let x = 20
let y = 58
let z = 42

console.log(x + y + z);
// или
let sum = x + y + z
console.log(sum);





// Task 2 💻
// Создайте переменные:

// - количество секунд в минуте
// - количество минут в часу
// - количество часов в сутках
// - количество суток в году
// Посчитайте ваш возраст в секундах и поместите результат в переменную myAgeInSeconds

const secInMinute = 60
const minInHours = 60
const hourInDay = 24
const dayInYear = 365

let myAge = prompt("Please enter your age");

let myAgeInSeconds = myAge * dayInYear * hourInDay * minInHours * secInMinute
console.log(myAgeInSeconds);





// Task 3 💻
// Создайте две переменные.
// Поместите в них переменную count и превратите в строку, а userName наоборот в число.
// Попробуйте реализовать задачу двумя разными способами.

let count = 42
let userName = '42'

let str1 = '' + count
let str2 = String(count)
let str3 = count.toString()
let str4 = `${count}`

console.log(str1, str2, str3, str4)

let num1 = +userName
let num2 = Number(userName)
let num3 = parseInt(userName)

console.log(num1, num2, num3)





// Task 4 💻
// Имеется три переменные:
// Сложите переменные так, чтобы в результате получилось выражение: 12 белых медведей и результат выведите в консоль.

let a = 1
let b = 2
let c = "белых медведей"

let bears = `${'' + a + b + ' ' + c}`
let bears2 = String(a) + String(b) + ' ' + c
let bears3 = '' + a + b + ' ' + c

console.log(bears)
console.log(bears2)
console.log(bears3)


// Task 5 💻
// Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную lengthWords и посчитайте в ней длинну всех слов из списка:

// - доступ
// - морпех
// - наледь
// - попрек
// - рубило

const access = 'доступ'
const marine = 'морпех'
const frost = 'наледь'
const reproach = 'попрек'
const chopped = 'рубило'

let lengthWords = access + marine + frost + reproach + chopped
console.log(lengthWords.length)





// Task 6 💻
// Запросить у пользователя имя и возраст и вывести их в консоль.

let name = prompt("Please enter your name");
let age = prompt("Please enter your age");

console.log(`User name: ${name}, User age:  ${age}`)






// ADVANCED level

// Task 1 👨‍🏫
// Поменяйте значение переменных местами не создавая дополнительной переменной:

let f = 4
let q = 3

f = f + q;
q = f - q;
f = f - q;

console.log(f, q)





// Task 2 👨‍🏫
// В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!
// Создайте переменную cipher и поместите туда необходимые символы

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1.charAt(1) + codeWord2.charAt(1) + codeWord3.charAt(1) + codeWord4.charAt(1) + codeWord5.charAt(1)
let cipher2 = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

console.log(cipher)
console.log(cipher2)