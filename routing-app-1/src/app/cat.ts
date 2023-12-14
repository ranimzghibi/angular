export class Cat {
    id: number;
    name: string;
    breed: string;
    country: string;
    imageUrl: string;
    constructor(id: number, name: string, breed: string, country: string,imageUrl: string) {
        this.id = id;
        this.name = name;
        this.breed = breed;
        this.country = country;
        this.imageUrl=imageUrl;
    }
}