// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const renderLicenseBadge = generateMarkdown.renderLicenseBadge;
const createMarkdown = generateMarkdown.createMarkdown;
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "githubUsername",
        default: "Github",
    },
    {
        type: "input",
        message: "What is your e-mail address?",
        name: "email",
        default: "sampleaddress@gmail.com",
    },
    {
        type: "input",
        message: "What is the name of your project?",
        name: "projectName",
        default: "README",
    },
    {
        type: "input",
        message: "Enter a description of your project",
        name: "projectDescription",
        default: "This is the project description",
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"],
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install",
        default: "npm i",
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "test",
        default: "npm test",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage",
        default: "Nothing",
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing",
        default: "Nothing",
    },
];

function askQuestions() {
    inquirer.prompt(questions).then(function (answers) {
        renderLicenseBadge(answers.license);
        fs.writeFile('SampleReadME.md', createMarkdown(answers), "utf-8", err => {
            if (err) {
              console.error(err);
            }
          });
    });
}

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function main() {
    askQuestions();
}

// Function call to initialize app
main();
