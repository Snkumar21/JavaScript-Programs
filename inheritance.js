const personPrototype = {
    greeting: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }};
    const display = Object.create(personPrototype);
    display.name = "Nitish";
    display.greeting();