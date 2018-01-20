const {logSuccess} = require('../common/logger')

const onSuccess = data => {
    logSuccess(`Provider created:\n${data.providerPath}`)
}

module.exports = onSuccess
