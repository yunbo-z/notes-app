const chalk = require('chalk')
const validator = require('validator')

const getNotes = require('./notes.js')
const msg = getNotes()

const command = process.argv[2]
if (command == 'add'){
    console.log('Add Notes')
}else if (command == 'remove'){
    console.log('Remove Notes')
}

console.log(msg)
console.log (validator.isEmail('yb@gmaol.com'))
console.log(chalk.red.inverse.bold('error'))
