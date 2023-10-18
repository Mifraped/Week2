import { Book } from "./book";

let libro1:Book = new Book("1984", 523, "TS10002039", "George Orwell", "Planeta de Agostini")

console.log(libro1.getTitle());
console.log(libro1.getNPages());
console.log(libro1.getIsbn());
console.log(libro1.getAuthor());
console.log(libro1.getEditorial());

libro1.setTitle("Siddhartha")
libro1.setNPages(397)
libro1.setIsbn("CD100004825")
libro1.setAuthor("Hermann Hesse")
libro1.setEditorial("Espasa Calpe")

console.log(libro1.toString());


