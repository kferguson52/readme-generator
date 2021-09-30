// TODO: Include packages needed for this application

const fs = require("fs");

const path = require("path");

const inquirer = require("inquirer");

const genMarkDown = require("./utils/generateMarkdown");

var ui = new inquirer.ui.BottomBar();
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a brief project description",
  },
  {
    type: "checkbox",
    message: "What type of license is needed for this repo?",
    name: "license",
    choices: ["Github", "MIT", "zLib License"],
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please provide a set of installation instructions that can be added to the READ.ME file",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Please provide a set of usage instructions that can be added to the READ.ME file",
  },
  {
    type: "input",
    name: "contribution",
    message:
      "Please provide a set of contribution instructions that can be added to the READ.ME file",
  },
  {
    type: "input",
    name: "test",
    message:
      "Please provide a set of test cases that can be added to the READ.ME file",
  }
  // Ask for the github username, 2) email address, 3) description of project, 4) ask for license needed (choices and reseasch licnense on github and only choose a few), 5) installation command and let the user know that, 6) test command and let the user know that 7) what the user needs to be informed on how to use repo 8) and what user needs to know to contribute towards this same repo
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", genMarkDown({ ...data }));
  });
}
// Everything in the object that exists is a spread operator. [{...data}]
// Function call to initialize app
init();
