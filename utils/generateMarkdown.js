const input = require('../index.js');
const fs = require('fs');

var texttoRender = "";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(response) {
  var texttoRender = `# ${response.project}
  `;
  if (response.licence === "MIT") {
    texttoRender += "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (response.licence === "Apache") {
    texttoRender += "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"; 
  } else {
    texttoRender = `# ${response.project}
    `;
  }
   const preparedExport = generateMarkdown(response, texttoRender);
   writetoFile(preparedExport);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response, texttoRender) {
  return texttoRender + `

## Description

${response.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage and Testing](#usage)
- [Constributing](#contributing)
- [License](#license)

## Installation

${response.installation}

## Usage and Testing

${response.instructions}

## Contributing 

${response.contributors}

## Licence

${response.licence}
`;
}

// TODO: Create a function to write README file
function writetoFile(preparedExport) {
  fs.writeFile('GENERATEDREADME.md', preparedExport, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

module.exports = {
  renderLicenseBadge,
  generateMarkdown,
};

