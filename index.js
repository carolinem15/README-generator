// node js basics per introduction to nodejs class

console.log('This is my cool app')
console.log(process.argv)

//must put "add" "1" and "2" into the array by putting them after node index in the CLI

let num1 = process.argv[3]
let num2 = process.argv[4]
let operator = process.argv[2]

// must parse the numbers (which are strings at this point) to make them integers
if (operator == 'add') {
    console.log(parseInt(num1) + parseInt(num2))
} else {
    console.log('Please read user docs')
}

// inquirer skeleton code for asking questions in the command line (per documentation)
var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  })

  // fs using writeFile method -- use this to create your .md file for the README

  const fs = require('fs')
  let item = process.argv[2]

  fs.writeFile('README.md', item, function(error){
    if (error) {
        console.log(error)
    }
    console.log('Way to go!')
  })

  // fs using appendFile method to add to existing .md file

  fs.appendFile('README.md', process.argv[2] + '\n', function(error) {
      if (error) {
          console.log(error)
      } else {
          console.log('Commit logged!')
      }
  })