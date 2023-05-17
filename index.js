// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
        message: 'Does your README need a table of contents?',
        name: 'toc'
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
        type: 'input',
        message: 'Is there any questions that needs to be added?',
        name: 'question'
    },
    {
        type: 'list',
        message: 'Which license are you using?',
        name: 'license',
        choices: [
            {
                name: 'Apache',
                value: '1'
            },
            {
                name: 'GNU General Public License',
                value: '2'
            },
            {
                name: 'MIT',
                value: '3'
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