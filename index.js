// fs dependency
const fs = require('fs')

// inquirer skeleton code for prompt
var inquirer = require('inquirer');
inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "What is the description of your project?",
            name: "description"
        },
        {
            type: "input",
            message: "How do you install your project?",
            name: "installation"
        },
        {
            type: "input",
            message: "How do you use your project?",
            name: "usage"
        },
        {
            type: "list",
            message: "What is your project's license?",
            name: "license",
            choices: ['MIT', 'GNU GPLv3', 'ISC']
        },
        {
            type: "input",
            message: "Does your project have any guidelines for contributions?",
            name: "contributing"
        },
        {
            type: "input",
            message: "Do you have any tests written for this project?",
            name: "tests"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
    ])
    .then(answers => {
        // Use user feedback for... whatever!!      
        // if statements for badge generation based on user response to license
        let license;

        if (answers.license === 'MIT') {
            license = '[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)'
        }
        if (answers.license === 'GNU GPLv3') {
            license = '[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)'
        }
        if (answers.license === 'ISC') {
            license = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
        }

        // fs using writeFile method

        fs.writeFile('README.md', generateMarkdown(answers, license) + '\n', function (error) {
            if (error) {
                console.log(error)
            }
        })
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error)
        } else {
            // Something else went wrong
            console.log('Oh no! Something else is wrong')
        }
    })

// define generateMarkdown function
const generateMarkdown = (obj, badge) => {
    return `
# ${obj.title}
${badge}
## Description 
${obj.description}
## Table of Contents
1. [Installation] (#installation)
2. [Usage] (#usage)
3. [Contributing] (#contributing)
4. [Tests] (#tests)
5. [Questions] (#questions)
## Installation 
${obj.installation}
## Usage 
${obj.usage}
## Contributing 
${obj.contributing}
## Tests
${obj.tests}
## Questions
[Github](http://github.com/${obj.username})
----
${obj.email}
----
## License
The MIT License: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code." (https://choosealicense.com/licenses/mit/)
The GNU GPLv3 License: "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights." (https://choosealicense.com/licenses/gpl-3.0/)
The ISC License: "A permissive license lets people do anything with your code with proper attribution and without warranty. The ISC license is functionally equivalent to the BSD 2-Clause and MIT licenses, removing some language that is no longer necessary." (https://choosealicense.com/licenses/isc/)
`
}