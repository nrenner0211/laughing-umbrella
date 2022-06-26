// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (projectName, github, email) => {
    return `# ${projectName}

## Description

## Table of Contents

## Installation

## Usage

## License

## Contributing

## Tests

## Questions

Have a question? Here's how you can reach me:

[Email](${email})

[GitHub Profile](https://github.com/${github})
`;
};

module.exports = generateMarkdown;