// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const profileDataArgs = process.argv.slice(2, process.argv.length);
const name = profileDataArgs[0];
const github = profileDataArgs[1];

const generatePage = (name, github) => {
    return `# ${name}

## ${github}

[https://github.com/${github}]`;
};

fs.writeFile('README.md', generatePage(name, github), err => {
    if (err) throw err;

    console.log('README complete! See README.md to see the output!');
})


// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };
  
// printProfileData(profileDataArgs);








// TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();