const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// manager prompts
managerQuestions = () => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
        },
    ])

        // once questions have been answers, prompt to generate another team member
        .then((answers) => {
            rolePrompt()
        })

        // catch any errors
        .catch((err) => console.error(err));
};

// engineer prompts
engineerQuestions = () => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
        },
    ])
        // once questions have been answers, prompt to generate another team member
        .then((answers) => {
            rolePrompt()
        })

        // catch any errors
        .catch((err) => console.error(err));
};

// intern prompts
internQuestions = () => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the name of the intern's school?",
        },
    ])
        // once questions have been answers, prompt to generate another team member
        .then((answers) => {
            rolePrompt()
        })

        // catch any errors
        .catch((err) => console.error(err));
};


// create another team member prompt
rolePrompt = () => {

    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
        },
    ])

        .then((answers) => {
            if (answers.role === "Engineer") {
                return engineerQuestions();
            }

            if (answers.role === "Intern") {
                return internQuestions();
            }

            if (answers.role === "I don't want to add any more team members") {
                return console.log('Thank you for completing all the questions. A team page has been successfully generated for you!')
            }
        })
};



// initialise questions
managerQuestions();


// for testing before prompts:
// const employeeTest = new Employee("Claire", 22545, "employee@email.com");
// const engineerTest = new Engineer("Harry", 666, "engineer@email.com", "HarrySmith");
// const internTest = new Intern("Abigail", 5569, "intern@email.com", "Park Hall");
// const managerTest = new Manager("Dave", 789, "manager@email.com", 4456998);