const {readFileSync, writeFileSync} = require('fs')
const {transformTemplate} = require('create-angular-template')
const {extname} = require('path')

const createAngularTemplate = (template, transformationOptions) => transformTemplate(template, transformationOptions)

const getAngularTemplatePath = path => {
    const ext = extname(path)
    return path.replace(ext, `-ngup${ext}`)
}

const createTransformedTemplate = (paths, transformationOptions) => {
    paths.forEach(pathsEntry => {
        const template = readFileSync(pathsEntry.angularJsPath, 'utf-8')
        const angularTemplate = createAngularTemplate(template, transformationOptions)
        writeFileSync(pathsEntry.angularPath, angularTemplate, 'utf-8')
    })
}

const createTemplates = (globalOptions, commandOptions, data) =>
    new Promise((resolve, reject) => {
        if (data.length === 0) {
            return reject('Found 0 templates matching given pattern')
        }

        const paths = data.map(dataEntry => ({
            angularJsPath: dataEntry.templatePath,
            angularPath: getAngularTemplatePath(dataEntry.templatePath)
        }))

        if (!globalOptions.isDryRunEnabled) {
            createTransformedTemplate(paths, commandOptions.transformationOptions)
        }

        resolve(paths)
    })

module.exports = createTemplates
