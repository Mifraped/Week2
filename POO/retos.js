class Person{
    constructor(nombre, dni, peso, alturaCM, yearOfBirth, hobbies){
        this.nombre = nombre
        this.dni = dni
        this.peso = peso
        this.alturaCM = alturaCM
        this.profesion
        this.telefono
        this.yearOfBirth = yearOfBirth
        this.hobbies = hobbies
    }
    saluda(){
        console.log(`Hola, me llamo ${this.nombre} y mi dni es ${this.dni}`);
    }
    calcIMC(){
        return this.peso / (this.alturaCM * this.alturaCM) * 10000
    }
    edad(anio){
        return anio - this.yearOfBirth
    }
    printAll(){
        for(let prop in this){
            console.log(`${prop} - ${this[prop]}`);
        }
    }
    printHobbies(){
        for(let hobbie of this.hobbies){
            console.log(hobbie);
        }
    }
}

module.exports = {Person}