// task 1
// Создайте переменную num передайте в него число 123 используя циклы вывести пирамиду
// вывод:
// 1
// 12
// 123
// let num = 123;
// for (let i = 1; i <= 3; i++) {
// 	num +=i;
// 	console.log(num);
// }
// task 2
// Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// let str = "";
// for (let i = 1; i <= 7; i++) {
// 	str += "#";
// 	console.log(str);
// }
// task 3
// Дан массив с объектами:
// let arr = [
// 	{ name: "Jack", age: 15 },
// 	{ name: "Helen", age: 34 },
// 	{ name: "Tom", age: 20 },
// 	{ name: "Bob", age: 54 },
// 	{ name: "Jessica", age: 13 },
// ];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] >= "18")

// }
// задача: реализовать рассылку сообщений типа: 'Hello,
// [Здесь должно быть имя клиента], the grand sale has begun,
// prices are reduced by 20%!', игнорировать клиентов, которым нет 18-ти лет

// task 4
// Дан массив: [1, 10, true, 'hello', 'JS', null, false, 0, {title: 'Samsung', price: 1000}],
//  задача, отфильтровать массив, оставив только строки и числа
// let arr2 = [
// 	1,
// 	10,
// 	true,
// 	"hello",
// 	"JS",
// 	null,
// 	false,
// 	0,
// 	{ title: "Samsung", price: 1000 },
// ];
// let res = arr2.filter();
// console.log(arr2);

// task 5
// Дана строка: 'Hello, I\'m Jack. I\'m 25 years old and I Frontend developer!', вывести в консоль символы у которых четный индекс
// task 6
// Дан многомерный массив состоящий из строк:
// const names = [
//   [
//     ['Helen', 'Tom'],
//     ['Jack', 'Peter']
//   ],
//   [
//     ['Jessica', 'Bob'],
//     ['Jimm', 'John']
//   ],
//   [
//     ['Alexa', 'Jessy'],
//     ['David', 'Paul']
//   ]
// ], задача: вывести в консоль только те имена, длинна которых больше 4-х символов
// task 7
// Проверьте все ли элементы в массиве number
// [1,2,3,4,5] --> true
// [1,"2","3",4,5] --> false
// let arr = [1, 2, "3", 4, 5];
// if (arr === "number") {
// 	console.log("true");
// } else {
// 	console.log("false");
// }
// task 8
// найдите разницу в возрасте между самого старшего и самого младшего в семье
// дан массив с возрастами, нужно возвращать новый массив
// [возраст старшего,возраст младшего,разница]
// [12,74,44,28,59] --> [74,12,62]
// task 9
// Напишите цикл, который за 7 вызовов console.log выводит такой ромбик:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ######
// #####
// ####
// ###
// ##
// #

// let str = "";
// for (let i = 1; i <= 7; i++) {
// 	str += "#";
// 	console.log(str);
// }
// for (let i = 7; i >= 1; i--) {
// 	console.log(str.slice(1));
// }

// task 10
// Вам дан целое число n и строку str и возвращает строку, повторяющуюся ровно n раз.
let str = "Hello";
let n = 3;
let New_str = "";
for (let i = 1; i <= n; i++) {
	New_str += str;
}
console.log(New_str);
// вывод:
// "hellohellohello"
// task 11
// Вам дан целое число n и вывести следующий результат
// let n = 10
// 1-2-3-4-5-6-7-8-9-10
// task 12
// Создайте пустой массив и заполните его числами от 1 до 10 с помощью цикла for
// task 13
// Найдите самый длинный элемент массива и выведите в консоль
// "Hello my name is John"
// task 14
// Так же найдите самый короткий элемент этого же массива
