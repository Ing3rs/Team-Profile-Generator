// TODO: Write code to define and export the Employee class

class Employee {

    constructor(name, id, email) {

        // assign properties
        this.name = name;
        this.id = id;
        this.email = email;

    }

    // get name value
    getName() {
        return this.name;
    }

    // get id value
    getId() {
        return this.id;
    }

    // get email value
    getEmail() {
        return this.email;
    }

    // get role (should return 'Employee')
    getRole() {
        const role = "Employee";
        return role;
    }

}

module.exports = Employee;