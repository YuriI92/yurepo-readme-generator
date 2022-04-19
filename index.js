// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const folderName = './dist'
const fileName = './dist/README.md';

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide a installation instructions. (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please provide a installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide a usage information. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide a usage information!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license do you want to include to your README file? (Required)',
            choices: ['None', 'Apache 2.0 License', 'Eclipse Public License 1.0', 'MIT License', 'Attribution License (BY)', 'Perl License'],
            validate: licenseCheck => {
                if (licenseCheck.length < 1) {
                    // console.log('Please choose license or none!');
                    return 'Please choose license or none!';
                } else {
                    return true;
                }
            }
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
            type: 'confirm',
            name: 'confirmContact',
            message: 'Would you like to enter contact information for an "Question" section?',
            default: true
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username (Required)?',
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            },
            when: ({ confirmContact }) => {
                if (confirmContact) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            },
            when: ({ confirmContact }) => {
                if (confirmContact) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
    .then(contactData => {
        readmeData.contact.push(contactData);
        return readmeData;
    });
}

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
    
            resolve({
                ok: true,
                message:'README file created!'
            });
        });
    })
};

// TODO: Create a function to initialize app
const init = () => {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    }

    questions()
        .then(contactInfo)
        .then(answers => {
            return generateMarkdown(answers);
        })
        .then(content => {
            return writeToFile(fileName, content);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch((err) => {
            if (err.isTtyError) {
                console.log(err);
            } else {
                console.log(err);
            }
        });
}

// Function call to initialize app
init();
