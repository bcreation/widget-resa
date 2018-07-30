import { isEmpty } from './globalUtils'
/**
 * Return a string in format yyyyMMdd to send in GAT API
 * @param {Date} date | Javascript Date
 */
function parseDateGAT(date) {
  if (isEmpty(date)) {
    date = new Date()
  }
  const year = date.getFullYear().toString()
  const month = (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1)
  const day = (date.getDate() < 10 ? '0' : '') + date.getDate()

  return year + month + day
}

/**
 * Return a string in format yyyyMMdd to send in GAT API
 * @param {Date} date | Javascript Date
 * @param {String} culture | Culture of navigator
 */
function parseDateByCulture(date, culture) {
  if (isEmpty(date)) {
    date = new Date()
  }
  if (isEmpty(culture)) {
    culture = 'en'
  }
  const year = date.getFullYear().toString()
  const month = (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1)
  const day = (date.getDate() < 10 ? '0' : '') + date.getDate()

  if (culture.indexOf('fr') !== -1) {
    return day + '/' + month + '/' + year
  } else {
    return month + '-' + day + '-' + year
  }
}

export { parseDateGAT, parseDateByCulture }
