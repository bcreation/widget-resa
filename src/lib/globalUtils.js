/**
 * Check if is an empty value
 * @param {any} variable
 * @returns boolean
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

function transformResponse(data) {
  if (data.substr(0, 1) === '(') {
    data = data.substr('1', data.length - 2)
  }
  return JSON.parse(data)
}

export { isEmpty, transformResponse }
