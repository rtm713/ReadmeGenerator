const index = require('../index');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

let badge = ' ';

function renderLicenseBadge(license) {
    switch(license) {
        case "MIT":
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
          break;
        case "APACHE 2.0":
            badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
          break;
        case "GPL 3.0":
            badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
          break;
        case "BSD 3":
            badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
          break;
        case "none":
          break;
      }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function createMarkdown(data) {
  return `# ${data.projectName}

  ${badge}

## Description
${data.projectDescription}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)


## Installation

To install necessary dependencies, run the following command:

    ${data.install}

## Usage
${data.usage}

## License

This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests

To run tests, run the following command:

    ${data.test}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. 
You can find more of my work at [${data.githubUsername}](https://github.com/${data.githubUsername}/).

`;
}

module.exports = {
    createMarkdown,
    renderLicenseBadge
}