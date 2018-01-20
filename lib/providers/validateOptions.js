const {logWarn} = require('../common/logger')

const validateOptions = options => {
    if (!options.serviceName) {
        logWarn('Provider name cannot be empty!')
        return false
    }
    return true
}

module.exports = validateOptions
