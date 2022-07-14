// Symbol = примитивный тип данных, уникальный
{
   let sym = Symbol() // неглобальный
   let symGlobal = Symbol.for("sym") // создает глобальный Symbol
   const user = {
      [symGlobal]: sym,
   }
   console.log(Symbol.for("sym")) // Symbol(sum)
   console.log(Symbol.keyFor(symGlobal)) // "sym"
   console.log(typeof user[symGlobal]) // symbol
}