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
        message: 'Provide a unique description of the project (Required)',
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
        name: 'repository',
        message: 'Enter repository URL: (Required)',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('Please enter repository URL!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license:',
        default: 'None',
        choices: [
            {
                name: 'MIT',
                value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            }, 
            {
                name: 'Apache 2.0',
                value: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            }, 
            {
                name: 'CC0 1.0',
                value: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
            },
            {
                name: 'Mozilla Public License 2.0',
                value: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            }, 
            {
                name: 'IBM Public License v1.0',
                value: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
            }, 
            {
                name: 'Boost 1.0',
                value: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
            }, 
            {
                name: 'None',
                value: 'No license'
            }]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Add installation requirements, for example:',
        default: 'npm init, npm install inquirer@8.2.4, npm install jest',
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
        message: 'Add usage instructions, for example:',
        default: 'node index',
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
        type: 'input',
        name: 'contribution',
        message: 'Add instructions on how to contribute:',
        default: 'fork repository'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Add a command to test your code, for example:',
        default: 'npm run test'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username: (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter a valid username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your full email: (Required)',
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
