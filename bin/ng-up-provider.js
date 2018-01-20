const command = require('../lib/providers/command')
const getGlobalOptions = require('../lib/common/getGlobalOptions')

const program = require('commander')
    .option('-n, --name <serviceName>', 'Name of AngularJS service')
    .option('-d, --dry', 'Dry run - see command output')
    .parse(process.argv)

const globalOptions = getGlobalOptions(program)

const options = {
    serviceName: program.name
}

command(globalOptions, options)
