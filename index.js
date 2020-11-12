  // fs using writeFile method to create .md file
  const fs = require('fs')

  // async method because we want this to happen first
  fs.writeFile('README.md', process.argv[2], function (error) {
      if (error) {
          console.log(error)
      }
  })
 
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
              type: "input",
              message: "What is your project's license?",
              name: "license"
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

        // fs using appendFile method to add to existing .md file

          fs.appendFile('README.md', answers.title + '\n', function (error) {
              if (error) {
                  console.log(error)
              } 
          })
          fs.appendFile('README.md', answers.description + '\n', function (error) {
            if (error) {
                console.log(error)
            } 
        })
        fs.appendFile('README.md', answers.installation + '\n', function (error) {
            if (error) {
                console.log(error)
            } 
        })
        fs.appendFile('README.md', answers.usage + '\n', function (error) {
            if (error) {
                console.log(error)
            } 
        })
        fs.appendFile('README.md', answers.license + '\n', function (error) {
            if (error) {
                console.log(error)
            } 
        })
        fs.appendFile('README.md', answers.contributing + '\n', function (error) {
            if (error) {
                console.log(error)
            } 
        })
        fs.appendFile('README.md', answers.tests + '\n', function (error) {
            if (error) {
                console.log(error)
            } 
        })
        fs.appendFile('README.md', answers.username + '\n', function (error) {
            if (error) {
                console.log(error)
            } 
        })
        fs.appendFile('README.md', answers.email + '\n', function (error) {
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
