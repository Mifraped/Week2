import { Contacts } from "./contacts";
import { Person } from "./person";

let contactos1: Contacts = new Contacts()
contactos1.people = [new Person("Anselmo", 79, "Calle de la Amargura"), new Person("Kiko", 14, "Calle del Arroyo"), new Person("Adelaida", 25, "Calle Betanzos")]

contactos1.printCalendar()

