import { Book } from "./book";

export class Library{
    constructor(private books:Book[], private address:string, private manager:string){
        this.books = books
        this.address = address
        this.manager = manager
    }
    public getAddress():string{
        return this.address
    }
    public getManager():string{
        return this.manager
    }
    public setAddress(newAddress:string):void{
        this.address = newAddress
    }
    public setManager(newManager:string):void{
        this.manager = newManager
    }
    public toString():string{
        let lista:string = ""
        for(let i = 0; i < this.books.length; i++){
            lista += "Book" + [i+1] + "\n" + this.books[i].toString() + "\n"
        }
        return lista
    }
    public getNumberOfBooks():number{
        return this.books.length
    }
    public findByAuthor(autor:string):Book[]{
        return this.books.filter(elem => elem.getAuthor()===autor)
    }
}
    