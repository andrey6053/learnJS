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