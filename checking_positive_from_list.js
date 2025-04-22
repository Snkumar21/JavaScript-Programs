// JavaScript code for every() function
function ispositive(element, index, array) {
    return element > 0;
}

function func() {
    let arr = [11, 89, 23, 7, 98];

    //check for positive number
    let value = arr.every(ispositive);

    console.log(value);
}
func();