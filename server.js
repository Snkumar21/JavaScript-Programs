//Create NodeJS application that contain the employee registration details and write a javascript to validate DOB, Joining date and salary.
// employeeRegistration.js

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function registerEmployee() {
    rl.question('Enter employee name: ', (name) => {
        rl.question('Enter Date of Birth (YYYY-MM-DD): ', (dob) => {
            rl.question('Enter Joining Date (YYYY-MM-DD): ', (joiningDate) => {
                rl.question('Enter Salary: ', (salary) => {
                    if (!isValidDate(dob) || !isValidDate(joiningDate) || !isValidSalary(salary)) {
                        console.log('Invalid input. Please try again.');
                        rl.close();
                        return;
                    }

                    // Display employee details
                    console.log(`\nEmployee Details:`);
                    console.log(`Name: ${name}`);
                    console.log(`Date of Birth: ${dob}`);
                    console.log(`Joining Date: ${joiningDate}`);
                    console.log(`Salary: ${salary}`);
                    rl.close();
                });
            });
        });
    });
}

function isValidDate(dateString) {
    return /^\d{4}-\d{2}-\d{2}$/.test(dateString);
}

function isValidSalary(salary) {
    return /^\d+$/.test(salary) && parseInt(salary) > 0;
}

// Start the employee registration process
registerEmployee();