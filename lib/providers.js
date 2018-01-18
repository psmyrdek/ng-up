const {join} = require('path')
const {writeFileSync} = require('fs')

const toCapitalized = require('./util/camelToCapitalized')
const toKebab = require('./util/camelToKebab')
const {logSuccess} = require('./util/logger')

const getTemplate = params => `
import { InjectionToken } from "@angular/core";

export const ${params.serviceNameCapitalized}_TOKEN = new InjectionToken<any>('${params.serviceNameCapitalized}');

export function ${params.serviceName}Factory(injector: any) {
    return injector.get('${params.serviceName}')
}

export const ${params.serviceName}Provider = {
    provide: ${params.serviceNameCapitalized}_TOKEN,
    deps: ['$injector'],
    useFactory: ${params.serviceName}Factory
}
`

const generateProvider = options => {
    const templateParams = {
        serviceName: options.serviceName,
        serviceNameCapitalized: toCapitalized(options.serviceName)
    }
    const providerTemplate = getTemplate(templateParams)
    const path = join(process.cwd(), `${toKebab(options.serviceName)}.provider.ts`)
    writeFileSync(path, providerTemplate, 'utf-8')

    logSuccess(`Provider for ${options.serviceName} created successfully!`)
}

module.exports = generateProvider
