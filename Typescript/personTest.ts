import { Person } from "./person";

let person1:Person = new Person("Paco", 47, "Calle Ave Maria 15")

person1.printName()
console.log(person1.yearOfBirth(2023));
console.log(person1.getAddress());
person1.setAddress("Calle Santa Maria de la Cabeza 105")
console.log(person1.getAddress());

