import { isEmpty, transformResponse } from '@/lib/globalUtils'

it('should return true', () => {
  let x = ''
  expect(isEmpty(x)).toBe(true)
  x = {}
  expect(isEmpty(x)).toBe(true)
  x = []
  expect(isEmpty(x)).toBe(true)
  x = ' '
  expect(isEmpty(x)).toBe(true)
})

it('should return false', () => {
  let x = 'test'
  expect(isEmpty(x)).toBe(false)
  x = { test: 'test' }
  expect(isEmpty(x)).toBe(false)
  x = ['test']
  expect(isEmpty(x)).toBe(false)
  x = ' test '
  expect(isEmpty(x)).toBe(false)
  x = new Date()
  expect(isEmpty(x)).toBe(false)
})

it('should return a great JSON with bad input', () => {
  // prettier-ignore
  const badJSON = '({ "json": "tes" })'
  expect(transformResponse(badJSON)).toEqual({ json: 'tes' })
})

it('should return a great JSON with good input', () => {
  const goodJSON = '{ "json": "tes" }'
  expect(transformResponse(goodJSON)).toEqual({ json: 'tes' })
})
