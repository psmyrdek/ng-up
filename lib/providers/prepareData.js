const {camelCaseToKebabCase} = require('../common/stringUtils')
const {join} = require('path')

const prepareData = commandOptions => Promise.resolve({
    providerPath: join(process.cwd(), `${camelCaseToKebabCase(commandOptions.serviceName)}.provider.ts`)
})

module.exports = prepareData
