const {logWarn} = require('../common/logger')
const prepareData = require('./prepareData')
const validateOptions = require('./validateOptions')
const createTemplates = require('./createTemplates')
const onSuccess = require('./onSuccess')

module.exports = (globalOptions, commandOptions) => {

    const optionsValid = validateOptions(commandOptions)

    if (!optionsValid) {
        return
    }

    prepareData(commandOptions)
        .then(data => createTemplates(globalOptions, commandOptions, data))
        .then(data => onSuccess(data))
        .catch(err => logWarn(err.toString()))

}
