// const fs = require('node:fs')
const fs = require('node:fs/promises')
// const stats = fs.statSync('./test.txt')
// console.log(
//     stats.isFile(),
//     stats.size
// )

const text = fs.readFileSync('./test.txt', 'utf-8')
console.log(text)

// fs.readFile('./test.txt', 'utf-8', (err,text) => {
//     console.log('texto with call back: ', text )
// })
// console.log('text despues del call back')

fs.readFile('./test.txt', 'utf-8').then(text =>{
    console.log("texto promesa: ", text)
})

