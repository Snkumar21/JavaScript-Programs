class Example { 
    constructor(name) { 
        this.name = name; // Instance member 
    } 
    static greet() { 
        return "Hello!"; // Static member 
    } 
} 
let obj = new Example("Nitish"); 
console.log(obj.name);
console.log(Example.greet());