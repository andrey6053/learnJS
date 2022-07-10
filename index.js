"use strict"
// 2.4 Переменные

// Работа с переменными
{
   let admin, name;
   name = "Джон";
   admin = name
   console.log(admin) // "Джон"
}

// Придумайте правильные имена
{
   let myPlanetName = "Earth"
   let user = "client"
}

// Какие буквы (заглавные или строчные) использовать для имён констант?
{
   const birthday = '18.04.1982'; // BIRTHDAY можно использовать, так как это фиксированное значение
   function someCode() { }
   const age = someCode(birthday); // AGE не стоит, т.к. значение вычисляется и может изменяться 
}

// 2.5 Типы данных

// Шаблонные строки
{
   let name = "Ilya";

   console.log(`hello ${1}`); // hello 1
   console.log(`hello ${"name"}`); // hello name
   console.log(`hello ${name}`); // hello Ilya
   console.log(typeof name) // "string"
}

// 2.6 Взаимодействие: alert, prompt, confirm

// Простая страница(Создайте страницу, которая спрашивает имя у пользователя и выводит его)

{
   /*
   result = prompt("Введите имя пользователя")
   alert(result)
   */
}

// 2.7 Преобразование типов

{
   let result = "Hello", numStr = "123", num = 123, isConfirm = true;
   console.log(Number(result)) // NaN
   console.log(result) // "Hello"
   console.log(Number(numStr)) // 123
   console.log(String(123)) // "123"
   console.log(+numStr) // 123
   console.log(String(isConfirm)) // "true"
   console.log(Number(isConfirm)) // 1
}

// 2.8 Базовые операторы, математика
// Постфиксная и префиксная формы
{
   let a = 1, b = 1;

   let c = ++a; // 2
   let d = b++; // 1
}

// Результат присваивания
{
   let a = 2;

   let x = 1 + (a *= 2); // 5
}

//Преобразование типов
{
   "" + 1 + 0 // "10"
   "" - 1 + 0 // -1
   true + false // 1
   6 / "3" // 2
   "2" * "3" // 6
   4 + 5 + "px" // "9px"
   "$" + 4 + 5 // "$45"
   "4" - 2 // 2
   "4px" - 2 // NaN
   "  -9  " + 5 // "  -9  5"
   "  -9  " - 5 // -14
   null + 1 // 1
   undefined + 1 // NaN
   " \t \n" - 2 // -2 \t и \n, по краям строки игнорируются
}

// Исправьте сложение 
{
   //let a = prompt("Первое число?", 1);
   //let b = prompt("Второе число?", 2);

   // console.log(+a + +b); // 12
}

// 2.9 Операторы сравнения

// Операторы сравнения
{
   5 > 4 // true
   "ананас" > "яблоко" // false
   "2" > "12" // true При сравнении 2 строк идет так же посимвольное сравнение
   undefined == null // true
   undefined === null // false
   null == "\n0\n" // false
   null === +"\n0\n" // false
}

// 2.10 Условное ветвление: if, '?'

// if (строка с нулём) 
{
   if ("0") {
      console.log('Привет');
   } // "0" == true, console.log сработает
}

// Название JavaScript
{
   let right = "ECMAScript"

   if (right === "ECMAScript") {
      console.log("Верно")
   } else {
      console.log("Не знаете? ECMAScript")
   }
}

// Покажите знак числа
{
   let num
   //let num = prompt("Введите число от -1 до 1")
   if (num === "1") {
      console.log(1)
   } else if (num === "0") {
      console.log(0)
   } else {
      console.log(-1)
   }
}

// Перепишите 'if' в '?' 
{
   let result, a, b;

   if (a + b < 4) {
      result = 'Мало';
   } else {
      result = 'Много';
   }
   a + b < 4 ? result = "Мало" : result = "Много"
}

// Перепишите 'if..else' в '?'
{
   let message, login;

   if (login == 'Сотрудник') {
      message = 'Привет';
   } else if (login == 'Директор') {
      message = 'Здравствуйте';
   } else if (login == '') {
      message = 'Нет логина';
   } else {
      message = '';
   }

   login == "Сотрудник" ? message = 'Привет' :
      login == 'Директор' ? message = 'Здравствуйте' :
         login == '' ? message = 'Нет логина' : message = ''
}

// 2.11 Логические операторы
// Что выведет console.log (ИЛИ)?
{
   let age
   console.log(null || 2 || undefined); // 2
   console.log(console.log(1) || 2 || console.log(3)); // выведет 1, потом 2
   console.log(1 && null && 2); // null
   console.log(console.log(1) && console.log(2)); // 1 undefined
   console.log(null || 2 && 3 || 4); // 3
   // Проверка значения из диапазона
   if (age >= 14 && age <= 90) { } // && означает, что значение переменной age может быть равно 14 или 90.
   // Проверка значения вне диапазона
   if (!(age >= 14 && age <= 90)) { }
   if (age <= 14 && age >= 90) { }
   // Вопрос о "if"
   if (-1 || 0) console.log('first'); // "first"
   if (-1 && 0) console.log('second'); // Не выполнится
   if (null || -1 && 1) console.log('third'); // "third"
}
// Проверка логина
{
   let userName = "Admin"
   let password = "12345"
   if (userName != "" && userName === "Admin") {
      console.log("Admin")
      if (password != "" && password === "12345") {
         console.log("Hello")
      } else {
         console.log("wrong password")
      }
   } else {
      console.log("wrong")
   }
}

//2.12 Оператор нулевого слияния (??)
{
   let a = 100, b;
   console.log(a ?? 200) // 100
   console.log(b ?? 200) // b = undefined, выведет 200
}

//2.13 Циклы while и for

// Последнее значение цикла
{
   let i = 3;

   while (i) {
      console.log(i--);
   } // 1
}

// Какие значения выведет цикл while?
{
   let i = 0;
   while (++i < 5) console.log(i); // 1,2,3,4
}
{
   let i = 0;
   while (i++ < 5) console.log(i); // 1,2,3,4,5
}
// Какие значения выведет цикл for?
{
   for (let i = 0; i < 5; i++) console.log(i); // 0,1,2,3,4
}
{
   for (let i = 0; i < 5; ++i) console.log(i); //0,1,2,3,4
}
//Выведите чётные числа
{
   for (let i = 0; i <= 10; i++) {
      if (i % 2 === 0) { console.log(i) }
   }
}
// Замените for на while
{
   let i = 0
   for (let i = 0; i < 3; i++) {
      console.log(`number ${i}!`);
   }
   while (i < 3) {
      console.log(`number${i}`)
      i++
   }
}
// Повторять цикл, пока ввод неверен
{
   let num
   do {
      //num = prompt("Введите число больше 100")
   } while (+num < 100)
}
// Вывести простые числа
{
   let n = 10;

   next:
   for (let i = 0; i <= n; i++) {
      for (let j = 2; j < i; j++) {
         if (i % j == 0) continue next;
      }

      console.log(i);
   }
}
// 2.14 Конструкция "switch"

//Напишите "if", аналогичный "switch"
{
   let browser
   switch (browser) {
      case 'Edge':
         console.log("You've got the Edge!");
         break;
      case 'Chrome':
      case 'Firefox':
      case 'Safari':
      case 'Opera':
         console.log('Okay we support these browsers too');
         break;
      default:
         console.log('We hope that this page looks ok!');
   }
   // Решение
   if (browser === "Edge") {
      console.log("You've got the Edge!")
   } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
      console.log('Okay we support these browsers too')
   } else { console.log('We hope that this page looks ok!') }
}

// Переписать условия "if" на "switch"
{
   //const number = +prompt('Введите число между 0 и 3', '');
   const number = 3
   if (number === 0) {
      console.log('Вы ввели число 0');
   }

   if (number === 1) {
      console.log('Вы ввели число 1');
   }

   if (number === 2 || number === 3) {
      console.log('Вы ввели число 2, а может и 3');
   }
   switch (number) {
      case 0:
         console.log('Вы ввели число 0')
         break
      case 1:
         console.log('Вы ввели число 1')
         break
      case 2:
      case 3:
         console.log('Вы ввели число 2, а может и 3')
         break
   }
}
// 2.15 Функции
//Обязателен ли "else"?
{
   function checkAge(age) {
      if (age > 18) {
         return true;
      } else {
         // ...
         return confirm('Родители разрешили?');
      }
   }

   function checkAgeAgain(age) {
      if (age > 18) {
         return true;
      }
      // ...
      return confirm('Родители разрешили?');
   }
   // Отличий нет, else не обязателен
}
// Перепишите функцию, используя оператор '?' или '||'
{
   function checkAge(age) {
      //if (age > 18) {
      //   return true;
      //} else {
      //   return confirm('Родители разрешили?');
      //}
      return age > 18 ? true : confirm('Родители разрешили?');
   }
}
// Функция min(a, b)
{
   function min(a, b) {
      return a > b ? a : b;
   }
   min(2, 5) // 2
   min(3, -1) // 1
   min(1, 1) // 1
}
// Функция pow(x,n)
{
   function pow(x, n) {
      return x ** n
   }
   pow(3, 2) // 9
   pow(3, 3) // 27
   pow(1, 100)//1
}
// 2.16 Function Expression
{
   let str = "str" + function () { return 2 }
   console.log(str) // strfunction(){return 2}

   const factorial = function factorialInner(num) {
      return (num <= 1) ? 1 : factorialInner(num - 1) * num
   }

   console.log(factorial(5)) // 120

   //console.log(factorialInner(5)) // ReferenceError
}

// 2.17 Стрелочные функции, основы
{
   function ask(question, yes, no) {
      if (question) yes()
      else no();
   }

   ask(
      "Вы согласны?",
      function () { console.log("Вы согласились."); },
      function () { console.log("Вы отменили выполнение."); }
   );
   const askFunc = (question, yes, no) => {
      question === "Yes" ? yes() : no()
   }

   askFunc("Yes", () => { console.log("Вы согласились.") }, () => { console.log("Вы отменили выполнение.") })
}