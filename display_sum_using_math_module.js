// Original array
let num = [4, 9, 16, 25];

// Performing reduce method
let sub  = num.map(sunstone);

function sunstone() {
    return num.map(Math.sqrt);
}

console.log(sub);