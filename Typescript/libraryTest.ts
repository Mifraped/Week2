import { Book } from "./book";
import { Library } from "./library";

let Book1:Book = new Book("1984", 523, "TS10002039", "George Orwell", "Planeta de Agostini")
let Book2:Book = new Book("Rebelion en la granja", 420, "SW10002098", "George Orwell", "Espasa Calpe")
let Book3:Book = new Book("Los hermanos Karamazov", 890, "GT10007392", "Fiodor Dostoievsky", "Akal")
let Book4:Book = new Book("El arte de amar", 523, "PE10002948", "Erich Fromm", "Planeta")
let Book5:Book = new Book("El clan del oso cavernario", 491, "CL10005638", "Jean M Auel", "Alfaguara")

let libreria:Library = new Library([Book1, Book2, Book3, Book4, Book5], "Mi direccion", "Yo")

libreria.setAddress("Otra direccion")
libreria.setManager("Otro manager")
console.log(libreria.getAddress());
console.log(libreria.getManager());

console.log(libreria.toString());
console.log(libreria.getNumberOfBooks());
console.log(libreria.findByAuthor("George Orwell"));


