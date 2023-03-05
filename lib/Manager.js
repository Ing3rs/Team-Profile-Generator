// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        // get values from Employee class
        super(name, id, email);

        // get office number value
        this.officeNumber = officeNumber;

    }

    // get role - overidden to return 'Manager'
    getRole() {
        const role = "Manager";
        return role;
    }    

    // return office number value
    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;