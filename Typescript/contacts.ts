import { Person } from "./person";

export class Contacts{
    public people: Person[]
    constructor(){
        this.people
    }
    public printCalendar(){
        for(let person of this.people){
            for(let atr in person){
                console.log(atr + " - " + person[atr]);
                
            }
        }
    }
}