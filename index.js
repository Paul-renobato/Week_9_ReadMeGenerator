const util = require("util");
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFileAsync = util.promisify(fs.writeFile);
const questions = [  {
    type: 'input',
    message: 'What is the title of the project?',
    name: 'projectTitle',
  }, {
    type: 'editor',
    message: 'What does this app do?',
    name: 'description',
  }, {
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation',
  }, {
    type: 'input',
    message: 'Provide instructions and examples for use.  Include screenshots as needed.',
    name: 'usages',
  }, {
    type: 'editor',
    message: 'List the ways in which someone may contribute to this project.',
    name: 'contributing',
  }, {
    type: 'list',
    message: 'Licenses:',
    name: 'licenses',
    choices: ['MIT', 'GNU', 'Apache', 'CDDL', 'BSD', 'Ms-PL'],
  }, {
    type: 'input',
    message: 'Please enter the URL to your github account.',
    name: 'ghUsername',
  }, {
    type: 'input',
    message: 'Email address',
    name: 'email',
  },];
function writeToFile(fileName, data) {
  fs.writeFile(filename, data, function(){
    console.log(filename)
    console.log(data)
  })
}
function init() {
    inquirer.prompt(questions).then(function(data) {
      writeFileAsync('./README.md', generateMarkdown(data));
      console.log(data)
    });
  }
init();