// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule(); //added for typeahead
const fs = require('fs'); //write file
const generateMarkdown = require ('./utils/generateMarkdown');

//do i need this line below?
//const prompt = inquirer.createPromptModule();

function writeToFile(fileName, data) {
    try{
        fs.writeFileSync(fileName, data);
        console.log('File successfully written');
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

// TODO: Create an array of questions for user input
inquirer 
    .prompt([
    {
        type: 'input',
        message: 'What is your README title?',
        name: 'title',
        default: 'READ ME Title'
    },
    {
        type: 'input',
        message: 'Provide a project description',
        name: 'description',
        default: 'This is a description'
    },
    {
        type: 'input',
        message: 'How do you install this?',
        name: 'installation',
        default: 'NPM install'
    },
    {
        type: 'input',
        message: 'What is the usage of this?',
        name: 'usage',
        default: 'node index.js'
    },
    {
        type: 'input',
        message: 'Add any additional contribution details',
        name: 'contributing',
        default: ''
    },
    
    {
        type: 'rawList',
        message: 'Select a license',
        name: 'license',
        default: 'MIT',
        choices: [
            'MIT',
            'BSD',
            'CC'
        ]
    },
    {
        type: 'input',
        name: 'test',
        message: 'What tests did you run?',
        default: 'npm run test'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What\'s your github username?',
        default: 'user123'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What\'s your email address?',
        default: 'johndoe@gmail.com'
    }
])
.then((answers) => {
    const result = generateMarkdown(answers);
    writeToFile('./dist/README.md', result);
})

// .then((answers) => {
//     const mdPageContent = generateREADME(answers);

//     fs.writeFile('README.md', mdPageContent, (err) =>
//     err ? console.log(err) : console.log('Success')
//         );
// });



// function init() {
//     prompt(questions)
//     .then((answers) => {
//         const result = generateMarkdown(answers);
//         writeToFile('./dist/README.md', result);
//     })
// };