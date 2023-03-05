// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {

        // get values from Employee class
        super(name, id, email);

        // get github username
        this.github = github;

    }

    // get role - overidden to return 'Engineer'
    getRole() {
        const role = "Engineer";
        return role;
    }    

    // return github username
    getGithub() {
        return this.github;
    }

}

module.exports = Engineer;