//Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

//Create an array of questions for user input
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write your project descripion",
    },
    {
      type: "input",
      name: "installation",
      message: "Explain the installation guide ",
    },
    {
      type: "input",
      name: "usage",
      message: "What is this project usage for?",
    },
    {
      type: "list",
      name: "license",
      message: "Chose the appropriate license for this project: ",
      choices: [
        "Apache",
        "Academic",
        "GNU/LGPL",
        "ISC",
        "MIT",
        "Boost Software License",
      ],
    },
    {
      type: "input",
      name: "contributers",
      message: "Who contributed towards the project?",
    },
    {
      type: "input",
      name: "tests",
      message: "What are the testing instructions?",
    },
    {
      type: "input",
      name: "issues",
      message: "How to report the issues? ",
    },
    {
      type: "input",
      name: "username",
      message: "Please enter your GitHub username: ",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address: ",
    },
  ]);
}

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
