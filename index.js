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

const mockData = {
    title: 'README Generator',
    description: 'Cough furball then cats take over the world kitty power present belly, scratch hand when stroked i shredded your linens for you. Pooping rainbow while flying in a toasted bread costume in space stare at the wall, play with food and get confused by dust for try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard. Cats go for world domination purr like an angel, humans,humans, humans oh how much they love us felines we are the center of attention they feed, they clean , or naughty running cat mrow why use post when this sofa is here but eat and than sleep on your face. Sit on human i love cats i am one wake up scratch humans leg for food then purr then i have a and relax yet loved it, hated it, loved it, hated it. Toy mouse squeak roll over missing until dinner time. All of a sudden cat goes crazy hide from vacuum cleaner so hiss at vacuum cleaner poop on couch make it to the carpet before i vomit mmmmmm.',
    installation: 'Cough furball then cats take over the world kitty power present belly, scratch hand when stroked i shredded your linens for you. Pooping rainbow while flying in a toasted bread costume in space stare at the wall, play with food and get confused by dust for try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard. Cats go for world domination purr like an angel, humans,humans, humans oh how much they love us felines we are the center of attention they feed, they clean , or naughty running cat mrow why use post when this sofa is here but eat and than sleep on your face. Sit on human i love cats i am one wake up scratch humans leg for food then purr then i have a and relax yet loved it, hated it, loved it, hated it. Toy mouse squeak roll over missing until dinner time. All of a sudden cat goes crazy hide from vacuum cleaner so hiss at vacuum cleaner poop on couch make it to the carpet before i vomit mmmmmm.',
    usage: 'Cough furball then cats take over the world kitty power present belly, scratch hand when stroked i shredded your linens for you. Pooping rainbow while flying in a toasted bread costume in space stare at the wall, play with food and get confused by dust for try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard. Cats go for world domination purr like an angel, humans,humans, humans oh how much they love us felines we are the center of attention they feed, they clean , or naughty running cat mrow why use post when this sofa is here but eat and than sleep on your face. Sit on human i love cats i am one wake up scratch humans leg for food then purr then i have a and relax yet loved it, hated it, loved it, hated it. Toy mouse squeak roll over missing until dinner time. All of a sudden cat goes crazy hide from vacuum cleaner so hiss at vacuum cleaner poop on couch make it to the carpet before i vomit mmmmmm.',
    license: 'IBM Public License Version 1.0',
    contributor: 'YuriI92',
    tests: 'Cough furball then cats take over the world kitty power present belly, scratch hand when stroked i shredded your linens for you. Pooping rainbow while flying in a toasted bread costume in space stare at the wall, play with food and get confused by dust for try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard. Cats go for world domination purr like an angel, humans,humans, humans oh how much they love us felines we are the center of attention they feed, they clean , or naughty running cat mrow why use post when this sofa is here but eat and than sleep on your face. Sit on human i love cats i am one wake up scratch humans leg for food then purr then i have a and relax yet loved it, hated it, loved it, hated it. Toy mouse squeak roll over missing until dinner time. All of a sudden cat goes crazy hide from vacuum cleaner so hiss at vacuum cleaner poop on couch make it to the carpet before i vomit mmmmmm.'
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
    .then(answers => generateMarkdown(mockData))  
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
