function generateMarkdown(data) {
    return `# ${data.title}

## Table of Contents

- [Description](#description)
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Description

${data.description}

## License

${data.license}

Click on the badge for more info!

## Repository

${data.repository}

## Installation

${data.installation}

## Usage

run
<code>${data.usage}</code>
in terminal

## Contribution

How to contribute: ${data.contribution}

## Tests

Enter this command into your terminal to test the app:

<code>${data.tests}</code>

## Questions

Have a question/concern? Want to report an issue? Follow the links to reach out!

[Email](${data.email})

[GitHub](https://github.com/${data.github})

## Video Walkthrough

[Video Walkthrough](https://drive.google.com/file/d/1e_8riViTzvL5tas3rgu2xBigf6bdjiQ0/view)

# Have a nice day
`
};

module.exports = generateMarkdown;

