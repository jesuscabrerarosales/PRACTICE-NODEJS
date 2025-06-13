const fs = require('node:fs/promises')

fs.readdir('.', (err, files) => {
    if(err){
        console.log("error: ",err);return;
    }

    files.forEach(files =>{
        console.log(files)
    })
})