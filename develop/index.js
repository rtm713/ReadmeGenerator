// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the name of your project",
        name: "projectName",
        default: "README",
    },
    {
        type: "input",
        message: "Enter a description of your project",
        name: "projectDescription",
        default: "This is the project description",
    }
];

function askQuestions() {
    inquirer.prompt(questions).then(function (answers) {
        console.log(answers);
        fs.writeFile('SampleReadME.md', generateMarkdown(answers), "utf-8", err => {
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
