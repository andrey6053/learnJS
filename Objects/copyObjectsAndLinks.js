{
   const user = {
      name: "andrey"
   }
   const user2 = user
   console.log(user === user2) // true, user2 - ссылка на обьект user

   const newUser = {
      name: "maksim"
   }

   const newUser2 = Object.assign({}, newUser)
   console.log(newUser === newUser2) // false, 2 разных обьекта
}