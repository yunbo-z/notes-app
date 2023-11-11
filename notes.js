const chalk = require('chalk')
const fs = require('fs')


const getNotes = function () {
    return 'your nodes...'
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (err) {
        return []
    }

}

// add notes
const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0) {
        // push() will add new items to the end of an array
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}




// remove notes
const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removes!'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No Note found!'))
    }

}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}