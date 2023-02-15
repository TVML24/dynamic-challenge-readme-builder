// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = ["What is your Github Username?", 
                    "What is your email address?", 
                    "What is the project's name?", 
                    "Write the project's description now", 
                    "Which licence does the project use?", 
                    "Are there any specific installation instructions for the project?", 
                    "Are there any instructions on usage and testing for the project?", 
                    "Who contributed to the project and are there any instructions for would-be collaborators in the future?"];

// names for prompts for my own reference
const names = ["username", "email", "project", "description", "licence", "installation", "instructions", "contributors"];

// TODO: Create a function to initialize app
function init() {
 inquirer
 .prompt([{
    type: 'input',
    message: questions[0],
    name: "username",
},
{
    type: 'input',
    message: questions[1],
    name: "email",
},
{
    type: 'input',
    message: questions[2],
    name: "project",
},
{
    type: 'input',
    message: questions[3],
    name: "description",
},
{
    type: 'list',
    message: questions[4],
    name: "licence",
    choices: ['MIT', 'Apache', 'No Licence'],
},
{
    type: 'input',
    message: questions[5],
    name: "installation",
},
{
    type: 'input',
    message: questions[6],
    name: "instructions",
},
{
    type: 'input',
    message: questions[7],
    name: "contributors",
},
])
    .then((response) => {
          generateMarkdown.renderLicenseBadge(response);
});
}

// Function call to initialize app
init();
