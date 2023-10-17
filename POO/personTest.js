let filePerson = require("./person")

let person1 = new filePerson.Person("Paquirri", "47017749L", 90, 175, 2000, ["comer", "dormir"])

person1.saluda()
console.log(person1.calcIMC());
console.log(person1.edad(2023));
person1.printAll()
person1.printHobbies()