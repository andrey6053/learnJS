"use strict"
// Каким будет результат выполнения этого кода?
{
   let user = {
      name: "Джон",
      go: function () { console.log(this.name) }
   }; // не хватало ;

   (user.go)()
}
// Объясните значение "this"
{
   let obj, method;

   obj = {
      go: function () { console.log(this); }
   };

   obj.go();               // (1) [object Object]

   (obj.go)();             // (2) [object Object]

   (method = obj.go)();    // (3) undefined

   (obj.go || obj.stop)(); // (4) undefined
}
// Использование "this" в литерале объекта
{
   function makeUser() {
      return {
         name: "Джон",
         ref() { this },
      };
   };
   let user2 = {}
   let user = makeUser(user2);

   console.log(user.ref.name); // [object object]
}
// Создайте объект calculator (калькулятор) с тремя методами:
{
   const calculator = {
      read() { this.a = 5; this.b = 10 },
      sum() { return this.a + this.b },
      mul() { return this.a * this.b },
   }
   calculator.read()
   console.log(calculator.sum())
   console.log(calculator.mul())
   console.log(calculator)
}
// Цепь вызовов
{
   let ladder = {
      step: 0,
      up() {
         this.step++;
         return this;
      },
      down() {
         this.step--;
         return this;
      },
      showStep: function () { // показывает текущую ступеньку
         console.log(this.step);
         return this;
      }
   };
}