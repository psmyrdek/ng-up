const chalk = require('chalk')

const logInfo = message => {
    console.log(chalk.cyan(message))
}

const logSuccess = message => {
    console.log(chalk.green(message))
}

const logWarn = message => {
    console.log(chalk.red(message))
}

module.exports = {
    logInfo,
    logSuccess,
    logWarn
}
