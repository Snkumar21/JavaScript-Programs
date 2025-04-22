class Animal { 
    constructor(name) { 
        this.name = name; 
    } 
    speak() { 
        return `${this.name} makes a sound`; 
    } 
} 
class Dog extends Animal { 
    speak() { 
        return `${this.name} barks`; 
    } 
} 
let dog = new Dog("Buddy"); 
console.log(dog.speak());