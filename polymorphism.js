class Shape { 
    area() { 
        return "Area method needs to be implemented"; 
    } 
} 
class Circle extends Shape { 
    constructor(radius) { 
        super(); 
        this.radius = radius; 
    } 
    area() { 
        return Math.PI * this.radius * this.radius; 
    } 
} 
let c = new Circle(5);
console.log(c.area());