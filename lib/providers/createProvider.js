const {camelCaseToCapitalized} = require('../common/stringUtils')
const {writeFileSync} = require('fs')

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

const writeToFile = (data, templateParams) => {
    const providerTemplate = getTemplate(templateParams)
    writeFileSync(data.providerPath, providerTemplate, 'utf-8')
}

const createProviderFile = (commandOptions, data) => {
    const templateParams = {
        serviceName: commandOptions.serviceName,
        serviceNameCapitalized: camelCaseToCapitalized(commandOptions.serviceName)
    }
    writeToFile(data, templateParams)
}

const createProvider = (globalOptions, commandOptions, data) => new Promise(resolve => {
    if (!globalOptions.isDryRunEnabled) {
        createProviderFile(commandOptions, data)
    }

    resolve(data)
})

module.exports = createProvider

