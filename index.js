// packages needed for the program to work
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for the readme
const questions = [
    {
        type: 'input',
        message:'What is the name of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What is the installation process?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Was their anyone who contributed in the making of the project?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'What is the test intructions for this project?',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Which license are you using?',
        name: 'license',
        choices: [
            {
                name: 'Apache',
                value: 'Apache'
            },
            {
                name: 'ISC',
                value: 'ISC'
            },
            {
                name: 'MIT',
                value: 'MIT'
            }
        ]
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('README successfully saved')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        const readMePageContent = generateMarkdown(answers)

        writeToFile('README.md', readMePageContent);
    });
}

// Function call to initialize app
init();