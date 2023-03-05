// TODO: Write code to define and export the Employee class

class Employee {

    constructor(name, id, email) {

        // check if properties have data
        if (!name) {
            throw new Error("'name' must have a value");
        }

        if (!id) {
            throw new Error("'id' must have a value");
        }

        if (!email) {
            throw new Error("'email' must have a value");
        }

        // assign properties
        this.name = name;
        this.id = id;
        this.email = email;

    }

    // getName()
    getName() {
        return this.name;
    }

    // getId()

    // getEmail()

    // getRole() (returns 'Employee')


}

module.exports = Employee;