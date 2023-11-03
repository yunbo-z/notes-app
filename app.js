const yargs = require('yargs')


// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('adding a new note!')
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function () {
        console.log('removing a note!')
    }
})
// create list command
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function () {
        console.log('listing a note!')
    }
})
// create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('reading a note!')
    }
})


console.log(yargs.argv)
// console.log(process.argv)