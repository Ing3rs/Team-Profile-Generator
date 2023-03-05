const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


// for testing before prompts: 
const employeeTest = new Employee("Claire", 22545, "employee@email.com");
const engineerTest = new Engineer("Harry", 666, "engineer@email.com", "HarrySmith");
