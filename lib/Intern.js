// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {

        // get values from Employee class
        super(name, id, email);

        // get school value
        this.school = school;

    }

    // get role - overidden to return 'Intern'
    getRole() {
        const role = "Intern";
        return role;
    }    

    // return school value
    getSchool() {
        return this.school;
    }

}

module.exports = Intern;