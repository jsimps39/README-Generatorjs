// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
prompt([
    {
        type: 'input',
        message: 'What is your README title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What was your motivation?',
        name: 'description'
    },
    //add more description questions?
    {
        type: 'input',
        message: 'How do you install this?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is the usage of this?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Who Contributed to this',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'What tests did you run?',
        name: 'tests'
    },
]).then(generateReadMe)
    .then(writeToFile);

// TODO: Create a function to write README file
// const generateREADME = (answers) => {
//     return
//     # Title
//     ${ answers.title }
// ## Description
// ${ answers.description }
// ## Installation
// ${ answers.Installation }
// ## Usage
// ${ answers.Usage }
// ## Contributors
// ${ answers.contributing }
// ## Tests
// ${ answers.test }
//     ;
// }

const writeToFile = (md, answers) => {
    try {
        fs.writeFileSync('README.md', md);
        console.log("success");
    } catch (err) {
        console.log(err)
    }
};

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
