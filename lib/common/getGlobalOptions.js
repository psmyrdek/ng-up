const getGlobalOptions = program => {
    const globalOptions = {
        isDryRunEnabled: program.dry
    }
    return globalOptions
}

module.exports = getGlobalOptions
