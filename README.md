# portfolio-showcase
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

The motivation behind this project was to practice and clarify concepts and understanding related to basic ideas and methods of nodeJS by building a dynamic readme generator. Specifically, this portfolio's construction allowed me to practice the use of dependencies such as inquirer and fs, construction and use of modules, the passing of information between scripts, use of template literals and backticks and a much better understanding of promises and their usage. This construction was farily straightforward, but did require me to understand concepts in a deeper way than I had purely from the lesson content. Cutting the code down to as few lines as possible was something I wanted to practice in this project as I have sometimes struggled with simplicity and it feels as though I have accomplished that.

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Installation

Use the command npm install to install the required dependencies in the integrated terminal prior to use.

## Usage

Upon entering the command node input.js into the integrated terminal the user will be prompted with several questions, the answers to which will be stored as the content for the readme that is to be generated.
After every question is answered the script will dynamically generate a readme titled 'GENERATEDREADME.MD', which contains all of the necessary content.
It will also include a badge displaying the licence at the top of the page. 

Screenshot:
![My Readme Generator](assets/images/screenshot-for-readme.jpg)

## Credits

This project did include some starter code, but it has been modified heavily.

This project makes use ofinquirer for the prompts and fs for the file-writing.

Everything else is my own work.

Credit also to my teachers, as without them this would not have been possible.

## License

Licensed under the MIT license.
