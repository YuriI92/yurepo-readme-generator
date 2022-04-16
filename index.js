// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const fileName = './README.md';

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
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
            message: 'Provide a usage information.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license do you want to include to your README file?',
            choices: ['None', 'IBM Public License Version 1.0', 'MIT License', 'Mozilla Public License 2.0', 'Attribution License (BY)', 'Perl License']
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide a contribution guidelines.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide a test instructions.'
        }
    ]);
};

const contactInfo = readmeData => {
    if (!readmeData.contact) {
        readmeData.contact = [];
    }

console.log(`
===================
Contact Information
===================
    `);
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ])
    .then(contactData => {
        readmeData.contact.push(contactData);
        return readmeData;
    });
}

const mockData = {
    title: 'README Generator',
    description: 'Cough furball then cats take over the world kitty power present belly, scratch hand when stroked i shredded your linens for you.',
    installation: 'Cough furball then cats take over the world kitty power present belly, scratch hand when stroked i shredded your linens for you. Pooping rainbow while flying in a toasted bread costume in space stare at the wall, play with food and get confused by dust for try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard.',
    usage: 'Cough furball then cats take over the world kitty power present belly, scratch hand when stroked i shredded your linens for you. Pooping rainbow while flying in a toasted bread costume in space stare at the wall, play with food and get confused by dust for try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard.',
    license: [ 'IBM Public License Version 1.0' ],
    contribution: 'Cough furball then cats take over the world kitty power present belly, scratch hand when stroked i shredded your linens for you. Pooping rainbow while flying in a toasted bread costume in space stare at the wall, play with food and get confused by dust for try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard.',
    tests: 'Cough furball then cats take over the world kitty power present belly, scratch hand when stroked i shredded your linens for you. Pooping rainbow while flying in a toasted bread costume in space stare at the wall, play with food and get confused by dust for try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard.',
    contact: [ { github: 'YuriI92', email: 'yurichikawa1992@gmail.com' } ]
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("Successfully generated README file!");
    })
};

questions()
    .then(contactInfo)
    .then(answers => {
        // console.log(answers);
        return generateMarkdown(mockData);
    })
    .then(content => writeToFile(fileName, content))
    .catch((err) => {
        if (err.isTtyError) {
            console.log(err);
        } else {
            console.log(err);
        }
    });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
