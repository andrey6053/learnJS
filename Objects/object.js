// 4.1 Objects

// Привет, object
/*Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта. */
{
   const user = {}
   user.name = "John"
   user.surname = "Smith"
   user.name = "Pete"
   delete user.name
}

// Проверка на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
{
   const schedule = {}
   function isEmpty(obj) {
      for (let i in obj) {
         return false
      }
      return true
   }
   console.log(isEmpty(schedule))
   schedule["8:30"] = "get up"
   console.log(isEmpty(schedule))
}
// Объекты-константы?
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
{
   const user = {
      name: "John"
   };

   // это будет работать?
   user.name = "Pete"; // Будет
   // user = [] // Выдаст ошибку TypeError
}
// Сумма свойств объекта
// У нас есть объект, в котором хранятся зарплаты нашей команды:
/*Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.*/
{
   let salaries = {
      John: 100,
      Ann: 160,
      Pete: 130
   }
   function sumSalary(obj) {
      let sum = 0
      for (let i in obj) {
         sum += obj[i]
      }
      return sum
   }
   console.log(sumSalary(salaries))
}
// Умножаем все числовые свойства на 2
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
{
   // до вызова функции
   let menu = {
      width: 200,
      height: 300,
      title: "My menu"
   };

   function multiplyNumeric(obj) {
      for (let i in obj) {
         if (typeof obj[i] === "number") {
            obj[i] *= 2
         }
      }
   }

   multiplyNumeric(menu);
   console.log(menu)

}
