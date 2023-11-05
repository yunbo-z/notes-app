const fs = require('fs')
// const book = {
//     title: 'she is the enemy',
//     author: 'thomas'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('2-json.json', bookJSON)

// we will get databuffer-binary data buffer
const dataBuffer = fs.readFileSync('2-json.json')
// so we have to add toString to get the json back
dataJSON = dataBuffer.toString()

// parse a json data into an object
const data = JSON.parse(dataJSON)
console.log(data.title)
