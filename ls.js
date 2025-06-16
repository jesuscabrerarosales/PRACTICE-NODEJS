const fs = require('node:fs/promises');
const path = require('node:path');

fs.readdir('.', (err, files) => {
    if(err){
        console.log("error: ",err);return;
    }

    files.forEach(files =>{
        console.log(files)
    })
})

const folder = process.argv[2] ?? '.'

async function ls (folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch {
        console.error('no se pudo leer el directorio ${folder}')
        process.exit(1)
    }

    const filesPromises = files.map(async file =>{
        const filePath = path.join(folder,file)
        let stats
        try {
            stats = await fs.stat(filePath)
        } catch {
            console.error('no se pudo leer el archivo ${filePath}')
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : '-'
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()

        return  `${fileType} ${file} ${fileSize.toString()} ${fileModified} `
    })

    const filesInfo = await Promise.all(filesPromises)
    filesInfo.forEach(filesInfo => console.log(filesInfo))
}

ls(folder)