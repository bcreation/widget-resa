/**
 * Check if is an empty value
 * @param {any} variable
 * @return boolean
 */
function isEmpty(variable) {
  if (!(variable instanceof Date)) {
    if (variable instanceof Object && !(variable instanceof Array)) {
      if (Object.getOwnPropertyNames(variable).length === 0) return true
    }
    if (variable instanceof Array) {
      if (0 === variable.length) return true
    }
    if (!(variable instanceof Object) && !(variable instanceof Array)) {
      if (!variable || 0 === variable.trim().length) return true
    }
  }
  return false
}

/**
 * Transform an array ajax response into a json response
 * @param {Array} data
 * @return Object
 */
function transformResponse(data) {
  if (data.substr(0, 1) === '(') {
    data = data.substr('1', data.length - 2)
  }
  return JSON.parse(data)
}

/**
 * Merge an overirde translation file with the original file
 * @param {Object} overrideTranslate
 * @param {Object} translationFile
 * @returns void
 */
function addTranslation(overrideTranslate, translationFile) {
  // for Each language add the client words object
  for (let t in translationFile) {
    for (let k in translationFile[t]) {
      if (overrideTranslate[t][k] !== undefined) {
        translationFile[t][k] = overrideTranslate[t][k]
      }
    }
    Object.assign(overrideTranslate[t], translationFile[t])
    return true
  }
  return null
}
export { isEmpty, transformResponse, addTranslation }
