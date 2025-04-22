let employee = {
    details: function (program, year) {
        return this.name
        + " "
        + this.rollNo
        + program
        + year;
    }
}//Objects declaration
let student1 = {
    name: "Rakesh",
    rollNo: "01",
}
let student2 = {
    name: "Ram",
    rollNo: "45 ",
}

let x = employee.details.call(student2, "MCA", " 1st year");
console.log(x);