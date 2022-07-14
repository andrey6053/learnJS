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