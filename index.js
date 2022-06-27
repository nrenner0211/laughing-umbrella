// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./develop/utils/generateMarkdown.js');

// welcome
console.log("Welcome! Answer the following questions to generate a high quality README for your project.");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Add installation requirements:',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Enter the steps of installation to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Add usage instructions:',
        validate: (value) => {
            if(value) {
                return true
            } else {
                console.log('Please add usage instructions.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license:',
        choices: ['MIT', 'Apache 2.0', 'MPL 2.0', 'ISC', 'GPLv3', 'Boost 1.0', 'IPL 1.0', 'FDL v1.3', 'None'],
        validate: (value) => {
            if(value) {
                return true
            } else {
                console.log('Please choose one.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Add instructions on how to contribute:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Add an example to test your code:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username: (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter a username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email: (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email!');
                return false;
            }
        }
    }
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }

    console.log('You can now preview your README file.');

    })
};

// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        writeToFile('README.md', generateMarkdown(userInput));
    })
};

// // Function call to initialize app
init();