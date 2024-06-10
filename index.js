// Required packages for the application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Utils/generateMardown');
// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide the user with instructions on usage:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select any license applicable to your project:',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide instructions on how to contribute to your project:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide tests and examples for your app and how to run them:'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email:'
  }
];
// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${fileName} has been generated successfully!`);
    }
  });
}
// Function to initialize app
async function init() {
  try {
    // Prompt user for input and store answers
    const answers = await inquirer.prompt(questions);
    
    // Generate markdown content from user answers
    const readMeContent = generateMarkdown(answers);
    
    // Write markdown content to README.md file
    writeToFile('README.md', readMeContent);
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}
// Initialize app
init();