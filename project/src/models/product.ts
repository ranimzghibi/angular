export class Product {
    public type: string;
    public description: string;
    public name: string;
    public price: number;
    public image: string;
    public id:number;
    
    constructor(type: string, description: string, name: string, price: number, image: string,id:number) { 
        this.type = type;
        this.description = description;
        this.name = name;
        this.price = price;
        this.image = image;
        this.id=id;
    }
}

