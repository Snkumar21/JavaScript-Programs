// Original array
let num = [88, 50, 25, 10];

// Performing reduce method
let sub  = num.reduce(sunstone);

function sunstone(total, num) {
    return total - num;
}

console.log(sub);