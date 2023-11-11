const fs = require('fs')


const getNotes = function () {
    return 'your nodes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    // push() will add new items to the end of an array
    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
    console.log('saved')
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (err) {
        return[]
    }

}


module.exports = {
    getNotes: getNotes,
    addNote: addNote
}