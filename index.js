// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message:'What is the name of your project?',
        name: 'Project Title'
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'Does your README need a table of contents?',
        name: 'Table of Contents'
    },
    {
        type: 'input',
        message: 'What is the installation instructions process?',
        name: 'Installation Instructions'
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'Usage Information'
    },
    {
        type: 'input',
        message: 'What is the contribution guidelines?',
        name: 'Contribution Guidelines'
    },
    {
        type: 'input',
        message: 'What is the test intructions for this project?',
        name: 'Test Instruction'
    },
    {
        type: 'input',
        message: 'Is there any questions that needs ot be added?',
        name: 'Questions'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
}

// Function call to initialize app
init();