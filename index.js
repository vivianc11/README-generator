// Included packages needed for this application by requiring it
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Please input the title of your project'
    },
    {
        type: 'input',
        name: 'descr',
        message: 'Please write your project a thorough description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install required dependencies?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What info does the user need to know if they use the repository?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please pick a license you would like to use for your project',
        choices: ['MIT', 'APACHE', 'GPL','NONE']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What info does the user need to know if they want to contribute to the repository?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to test the app?'
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Please input your Github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please input your email address'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Your README.md is being generated!");
        writeToFile('README.md', generateMarkdown({...responses}))
    })
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
