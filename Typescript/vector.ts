export class Vector{
    private elements:number[] = []
    constructor(n:number, k:number){
        for(let i = 0; i < n; i++){
            this.elements.push(Math.floor(Math.random() * (k - 0 + 1) + 0))
        }
    }
    print():void{
        console.log(this.elements);
    }
    add(v1:Vector):Vector{
        let newVector:Vector = new Vector(0,0)
        newVector.elements = v1.elements.map((elem, i) => elem + this.elements[i])
        return newVector        
    }
    subs(v1:Vector):Vector{
        let newVector:Vector = new Vector(0,0)
        newVector.elements = v1.elements.map((elem, i) => this.elements[i] - elem)
        return newVector     
    }
    mult(v1:Vector):Vector{
        let newVector:Vector = new Vector(0,0)
        newVector.elements = v1.elements.map((elem, i) => elem * this.elements[i])
        return newVector 
    }
    multNumber(n:number):Vector{
        let newVector:Vector = new Vector(0,0)
        newVector.elements = this.elements.map(elem => elem * n)
        return newVector 
    }
    getElements():number[]{
        return this.elements
    }
}