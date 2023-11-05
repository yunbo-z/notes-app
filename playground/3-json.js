const fs = require('fs')
const { parsed } = require('yargs')

const dataJSON = fs.readFileSync('3-json.json').toString()
console.log(dataJSON)
const infoJSON = JSON.stringify(dataJSON)
console.log(infoJSON)
const user = JSON.parse(dataJSON)


user.name = 'tuatua'
user.age = '3'

const userJSON = JSON.stringify(user)
console.log(userJSON)
fs.writeFileSync('3-json.json',userJSON)