{
   const user = {
      name: "John",
      sum: 123,
      [Symbol.toPrimitive](hint) {
         return hint == "string" ? `user = ${this.name}` : this.sum
      }
   }
   console.log(String(user)) // hint === string
   console.log(user + 3) // hint === number
}