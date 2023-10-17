let contactsFile = require("./contacts")
let personFile = require("./person")

let contactos1 = new contactsFile.Contacts()

contactos1.persons = [new personFile.Person("Paquita", "17164749L", 50, 150, 1940, ["coser", "bailar"]), new personFile.Person("Bernardo", "11164743P", 90, 150, 1970, ["ver la tele", "beber cerveza"]), new personFile.Person("Ataulfo", "12364749M", 70, 170, 1965, ["cocinar", "andar"])
]

console.log(contactos1.persons);
contactos1.printPersons()