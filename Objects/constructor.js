// Создание калькулятора при помощи конструктора
{
   function Calculator() {
      this.read = function () {
         this.a = 5;
         this.b = 10;
         this.c
         return this
      }
      this.sum = function () {
         this.c = this.a + this.b
         return this
      }
      this.mult = function () {
         this.c = this.a * this.b
         return this
      }
      this.showResult = function () {
         return this.c
      }
   }
   const calc = new Calculator()
   console.log(calc.read().sum().showResult())
}
// Создаём Accumulator
{
   function Accumulator() {
      this.value = 5
      this.read = function () {
         this.value += this.value
      }
   }
   const acc = new Accumulator()
   console.log(acc.value)
   console.log(acc.read())
   console.log(acc.value)
}
