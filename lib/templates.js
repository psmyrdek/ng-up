const glob = require('glob')
const {transformTemplate} = require('create-angular-template')
const {readFileSync, writeFileSync} = require('fs')
const {extname, basename} = require('path')
const {logWarn, logSuccess} = require('./util/logger')

const getMatches = globPattern => {
    const globOptions = {absolute: true}
    const promise = new Promise((resolve, reject) => {
        glob(globPattern, globOptions, (err, files) => {
            if (err) {
                reject(err)
            }
            resolve(files)
        })
    })
    return promise
}

const transformFiles = (paths, transformationOptions) => {

    if (paths.length === 0) {
        logWarn('Cannot find templates with matching names.')
    }

    paths.forEach(pathToTemplate => {

        const template = readFileSync(pathToTemplate, 'utf-8')
        const angularTemplate = transformTemplate(template, transformationOptions)
        const newPath = pathToTemplate.replace(`${extname(pathToTemplate)}`, '-ngup.html')

        writeFileSync(newPath, angularTemplate, 'utf-8')
        logSuccess(`* Template ${basename(newPath)} created successfully!`)
    })
}

const transformTemplates = options => {
    getMatches(options.pattern)
        .then(paths => transformFiles(paths, options.transformationOptions))
        .catch(err => console.error(err.toString()))
}

module.exports = transformTemplates
