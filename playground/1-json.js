const book = {
    title: 'she is the enemy',
    author: 'thomas'
}

// JSON stringify to take an object and convert it to JSON
const bookJSON = JSON.stringify(book)
console.log(bookJSON)
// JSON Parse to take JSON data in and convert it to an object
const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)