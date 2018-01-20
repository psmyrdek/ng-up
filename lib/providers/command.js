const {logWarn} = require('../common/logger')
const prepareData = require('./prepareData')
const validateOptions = require('./validateOptions')
const createProvider = require('./createProvider')
const onSuccess = require('./onSuccess')

module.exports = (globalOptions, commandOptions) => {

    const optionsValid = validateOptions(commandOptions)

    if (!optionsValid) {
        return
    }

    prepareData(commandOptions)
        .then(data => createProvider(globalOptions, commandOptions, data))
        .then(data => onSuccess(data))
        .catch(err => logWarn(err.toString()))

}
