const command = require('../lib/templates/command')
const getGlobalOptions = require('../lib/common/getGlobalOptions')

const defaults = {
    pattern: '**/*.html',
    aliasForThis: '$ctrl',
    stripTagPrefix: 'data',
    format: 'html',
    bindToCurlyBraces: false,
    classListToRemove: ['ng-hide']
}

const program = require('commander')
    .option('-p, --pattern [glob]', 'Pattern - glob', defaults.pattern)
    .option('-s, --stripTagPrefix [strip]', 'Strip tag prefix', defaults.stripTagPrefix)
    .option('-a, --aliasForThis [alias]', 'Alias for this', defaults.aliasForThis)
    .option('-f, --format [format]', 'Format (syntax) of template', defaults.format)
    .option('-b, --bindToCurlyBraces [bind]', 'Transform ng-bind to curly braces binding', defaults.bindToCurlyBraces)
    .option('-c, --classListToRemove [classList]', 'Comma separated list of classes to remove',
        defaults.classListToRemove)
    .option('-d, --dry', 'Dry run - see command output')
    .parse(process.argv)

const globalOptions = getGlobalOptions(program)

const options = {
    pattern: program.pattern,
    transformationOptions: {
        stripTagPrefix: program.stripTagPrefix,
        aliasForThis: program.aliasForThis,
        format: program.format,
        bindToCurlyBraces: program.bindToCurlyBraces,
        classListToRemove: program.classListToRemove
    }
}

command(globalOptions, options)
