#!/usr/bin/env node

require('commander')
    .version(require('../package.json').version)
    .command('template', 'Update your existing templates with new syntax.')
    .command('provider', 'Create providers for AngularJS services.')
    .parse(process.argv)
