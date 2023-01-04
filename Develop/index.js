// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 

// TODO: Create a function to write README file took out'answers' and put {title, etc}
const generateREADME = (answers) => {
    return ` # ${answers.title}
    ## Description
    ${answers.description}
    ## Installation
    ${answers.installation}
    ## Usage
    ${answers.usage}
    ## Contributors
    ${answers.contributing}
    ## Tests
    ${answers.tests}
    `;
};

//do i need this line below?
//const prompt = inquirer.createPromptModule();

// TODO: Create an array of questions for user input
inquirer 
    .prompt([
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
])
.then((answers) => {
    const mdPageContent = generateREADME(answers);

    fs.writeFile('README.md', mdPageContent, (err) =>
    err ? console.log(err) : console.log('Success')
        );
});
