async function loadMathModule() {
    const math = await import('./math.js');

    console.log("Dynamic Imports Output :");
    console.log("Add: ",math.add(2, 3));
    console.log("Multiply: ", math.mul(4, 3));
}

loadMathModule();