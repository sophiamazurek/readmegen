// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
let generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'projecttitle',
      message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project about?'
    },
    {
        type: 'input',
        name: 'installationinstructions',
        message: 'What is your installation instructions?'
    },
    {
        type: 'input',
        name: 'usageinformation',
        message: 'What are you using this for?'
    },
    {
        type: 'input',
        name: 'contributionguidelines',
        message: 'Did anyone help you?'
    },
    {
        type: 'input',
        name: 'testinstructions',
        message: 'Do you have any test instructions?'
    },
    {
      type: 'list',
      message: 'What licenses do you have?',
      name: 'license',
      choices: ['ISC', 'MIT', 'Mozilla']
    },
    {
        type: 'input',
        name: 'githubusername',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'features',
        message: 'Do you have any features?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Would you like anyone else to help you?'
    },
    {
        type: 'list',
        message: 'What is your coding language?',
        name: 'badges',
        choices: ['javascript', 'HTML', 'NodeJS']     
     }
  ];

// TODO: Create a function to write README file
function writeToFile(filename, templatedata) {


    fs.writeFile(filename,templatedata, function(err) {
        if (err) {
          return console.log(err);
        }
  
        console.log('Success!');
      });
}

// TODO: Create a function to initialize app
function init() {
    //ask user for info (inquirer)
    inquirer.prompt(questions)
    .then(function(data) {
         let updatedTemplate= generateMarkdown(data)
        // console.log(updatedTemplate);
        //send to the template
        //save it a readme.md (fs.writefile)
        writeToFile("./output/README.md", updatedTemplate)
    
    
      
      });
}

// Function call to initialize app
init();
