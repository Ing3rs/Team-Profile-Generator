// TODO: Write code to define and export the Employee class

class Employee {

    constructor(name, id, email) {

        // check if properties have data
        // if (!name) {
        //     throw new Error("'name' must have a value");
        // }

        // if (!id) {
        //     throw new Error("'id' must have a value");
        // }

        // if (!email) {
        //     throw new Error("'email' must have a value");
        // }

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