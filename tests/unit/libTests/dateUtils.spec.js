import { parseDateGAT, parseDateByCulture } from '@/lib/dateUtils'

it('should parse the date and return a custom format', () => {
  const parsedDate = parseDateGAT(new Date(2018, 10, 1))
  expect(parsedDate).toBe('20181101')
})

it('should parse the date and return a culture format', () => {
  const parsedDate = parseDateByCulture(new Date(2018, 10, 1), 'fr')
  expect(parsedDate).toBe('01/11/2018')
})

it('should return a today date with default culture format', () => {
  const parsedDate = parseDateByCulture()
  var date = new Date()
  const year = date.getFullYear().toString()
  const month = (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1)
  const day = (date.getDate() < 10 ? '0' : '') + date.getDate()
  expect(parsedDate).toBe(month + '-' + day + '-' + year)
})
