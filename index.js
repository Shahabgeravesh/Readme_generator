//Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const template = require("./template");

//Create an array of questions for user input
function promptUser() {
  inquirer
    .prompt([
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
        choices: ["Apache", "IBM", "GPL", "BSD", "MIT"],
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
    ])
    .then((inquirerResponse) => {
      console.log("Making the Readme", inquirerResponse);
      writeToFile("Readme.md", template(inquirerResponse));
    });
}
promptUser();

function writeToFile(name, data) {
  return fs.writeFileSync(path.join(process.cwd(), name), data);
}
