const {logSuccess, logInfo} = require('../common/logger')

const onSuccess = data => {
    logInfo(`Created ${data.length} template(s):`)
    data.forEach(dataEntry => {
        logSuccess(`* ${dataEntry.angularPath}`)
    })
}

module.exports = onSuccess
