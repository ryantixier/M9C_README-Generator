// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What would you like to title your project?",
  },
  {
    type: "input",
    name: "description",
    message: "How would you describe your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What steps need to be taken in order to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Please provide instructions for use; link relevant screenshots for clarification.",
  },
  {
    type: "list",
    name: "license",
    message: "Which license did you apply to your project?",
    choices: [
      {
        name: "MIT",
        value:
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      },
      {
        name: "Eclipse",
        value:
          "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
      },
      {
        name: "Apache",
        value:
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      },
      {
        name: "IBM",
        value:
          "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
      },
    ],
  },
  {
    type: "input",
    name: "credits",
    message:
      "Please list any individuals, programs, and/or resources utilized in contribution to your project.",
  },
  {
    type: "input",
    name: "tests",
    message: "What testing measures did you utilize to check your code?",
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    fs.writeFileSync("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
