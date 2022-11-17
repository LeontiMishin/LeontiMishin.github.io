const fs = require('fs')
const path = require('path')


fs.mkdir(path.join(__dirname, 'test'), err => {
    if (err) throw err

    console.log('Папка была создана')
})

fs.writeFile(
    path.join(__dirname, 'test', 'text.txt'),
    'SPTV20',
    (err) => {
        if (err) throw err
        console.log('Файл был создан')

        fs.appendFile(
            path.join(__dirname, 'test', 'text.txt'),
            ' ,2022',
            err => {
                if (err) throw err
                console.log('Файл был изменен')

                fs.readFile(
                    path.joinw(__dirname, 'test', 'text.txt'),
                    'utf-8',
                    (err, data) => {
                        if (err) throw err
                        console.log(data)
                    }
                )
            }
        )
    }
)

// fs.rename(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     path.join(__dirname, 'notes', 'notes.txt'),
//     err => {
//         if (err) throw err

//         console.log('файл переименован')
//     }
// )