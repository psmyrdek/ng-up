const generateProvider = require('../lib/providers')

const program = require('commander')
    .option('-n, --name <serviceName>', 'Name of AngularJS service')
    .parse(process.argv)

generateProvider({
    serviceName: program.name
})
