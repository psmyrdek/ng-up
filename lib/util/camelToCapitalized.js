module.exports = string => string.replace(/([a-z])([A-Z])/g, '$1_$2').toUpperCase()
