// const dog = {
//     name: "Doggie",
//     legCount: 2,
//     speaks: "Bhow Bhow",
// };

// const cat = {
//     name: "Kitty",
//     legCount: 4,
//     speaks: "Meow Meow",
// };

// function printStr(animal) {
//     console.log("animal: " + animal["name"] + " " + animal["speaks"]);
// }

// printStr(cat)
// printStr(dog)




class Animal{
    constructor(name, legCount,speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }

    static myType(){
        console.log("I am an Animal");
    }
    speak(){
        console.log("Hi! there " + this.speaks);
    }
}

Animal.myType();
let dog = new Animal("Dog", 4, "Bhow Bhow");
let cat = new Animal("Cat", 4, "Meow Meow");

dog.speak();
cat.speak();