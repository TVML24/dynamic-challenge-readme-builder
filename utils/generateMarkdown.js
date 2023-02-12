const index = require('../index');
const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(response) {
  var texttoRender = "";
  if (response.licence === "MIT") {
    texttoRender = `# ${response.project}  
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (response.licence === "Apache") {
    texttoRender = `# ${response.project}  
    [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else {
    texttoRender = `# ${response.project}`;
  }
  generateMarkdown(response, texttoRender);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response, texttoRender) {
  console.log (texttoRender + `

## Description

${response.description}

## Table of Contents

- [Description](#description)
- [Installation] (#installation)
- [Usage and Testing](#usage)
- [Constributing](#contributing)
- [License](#license)

## Installation

${response.installation}

## Usage and Testing

${response.instructions}

##contributing 

${response.contributors}

## Licence

${response.licence}
`)
}

var preparedExport = generateMarkdown;
module.exports = {
  preparedExport,
  renderLicenseBadge,
  generateMarkdown
};