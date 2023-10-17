class Contacts{
    constructor(){
        this.persons = []
    }
    printPersons(){
        for(let person of this.persons){
            for(let atr in person){
                console.log(atr + " - " + person[atr]);
            }
        }
    }
}
module.exports = {Contacts}