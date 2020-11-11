  // fs using writeFile method -- use this to create your .md file for the README
  const fs = require('fs')
  let item = process.argv[2]

  fs.writeFile('README.md', item, function (error) {
      if (error) {
          console.log(error)
      }
    //   console.log('Way to go!')
  })

  // inquirer skeleton code for asking questions in the command line (per documentation)
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
          // .then(function(renderMd))
          
    // fs using appendFile method to add to existing .md file

    fs.appendFile('README.md', process.argv[2] + '\n', function(error) {
        if (error) {
            console.log(error)
        } else {
            console.log('Commit logged!')
        }
    })
      })
      .catch(error => {
          if (error.isTtyError) {
              // Prompt couldn't be rendered in the current environment
              console.log(error)
          } else {
              // Something else when wrong
              console.log('Oh no! Something else is wrong')
          }
      })