// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide a installation instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide a usage instructions.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license do you want to include to your README file?',
            choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0']
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who is your contributor(s)? Provide his/her GitHub username.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide a testing instructions.'
        }
    ])
    .then((answers) => console.log(answers))
    .catch((err) => {
        if (err.isTtyError) {
            console.log(err);
        } else {
            console.log(err);
        }
    })
}

questions();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
