// Included packages needed for this application by requiring it
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'GitHub',
        message: 'Please input your Github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please input your email address'
    },
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
        name: 'GitHub',
        message: 'Please input your Github username.'
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'Please pick a license you would like to use for your project',
        choices: ['MIT', 'APACHE', 'GPL','NONE']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
