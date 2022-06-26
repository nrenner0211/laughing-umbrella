// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./develop/utils/generateMarkdown.js')

// content = generateMarkdown(projectName, email, github)

// fs.writeFile('README.md', content, err => {
//     if (err) throw err;

//     console.log('README complete! See README.md to see the output!');
// })

const promptAbout = () => {

    return inquirer.prompt([

      {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project? (Required)'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)'
      }

    ]);
};

const promptDetails = () => {

    return inquirer.prompt([

      {
        type: 'confirm',
        name: 'installation',
        message: 'Add installation requirements?',
        default: false
      },
      {
        type: 'confirm',
        name: 'usage',
        message: 'Add usage instructions?',
        default: false
      },
      {
        type: 'checkbox',
        name: 'licenses',
        message: 'Select a license:',
        choices: ['MIT', 'Apache License 2.0', 'Mozilla Public License', 'GNU General Public License v3.0', 'BSD 2-Clause "Simplified" License', 'None'],
        default: 'None'
      },
      {
        type: 'confirm',
        name: 'contributing',
        message: 'Add contributors?',
        default: false
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Add and example to test your code:'
      }

    ])
};

const promptQuestions = () => {
    
    return inquirer.prompt([

        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email'
        }

    ])
}
  
promptAbout()
    .then(answers => console.log(answers))
    .then(promptDetails)
    .then(projectAnswers => console.log(projectAnswers))
    .then(promptQuestions)
    .then()



// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };
  









// TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();