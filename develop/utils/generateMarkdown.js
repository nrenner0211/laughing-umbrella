// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(data) {
    return `# ${data.title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## License

[![license](https://img.shields.io/badge/License-${data.license}-blue.svg})](https://opensource.org/licenses/${data.license})

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution

How to contribute: ${data.contribution}

## Tests

Enter this command into your terminal to test the app:

${data.tests}

## Questions

Have a question/concern? Follow the links to reach out!

[Email](${data.email})

[GitHub](https://github.com/${data.github})

[Video Walkthrough](https://drive.google.com/file/d/1gCL1bTMn6Cen0qRskaGj7JkVBW_62WSy/view)
`
};

module.exports = generateMarkdown;
