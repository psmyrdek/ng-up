const glob = require('glob')

const mapping = file => ({templatePath: file})

const prepareData = commandOptions => {
    const globOptions = {absolute: true}
    const {pattern} = commandOptions
    const promise = new Promise((resolve, reject) => {
        glob(pattern, globOptions, (err, files) => {
            if (err) {
                reject(err)
            }
            resolve(files.map(mapping))
        })
    })
    return promise
}

module.exports = prepareData
