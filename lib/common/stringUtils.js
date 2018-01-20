module.exports.camelCaseToCapitalized = string => string.replace(/([a-z])([A-Z])/g, '$1_$2').toUpperCase()

module.exports.camelCaseToKebabCase = string => string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

