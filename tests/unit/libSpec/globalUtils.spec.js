import { isEmpty, transformResponse, addTranslation } from '@/lib/globalUtils'

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

it('should return true', () => {
  const original = {
    'fr-FR': {
      label: 'test fr',
    },
    'en-US': {
      label: 'test us',
    },
  }
  const addon = {
    'fr-FR': {
      label: 'test addon fr',
    },
    'en-US': {
      label: 'test addon us',
    },
  }
  expect(addTranslation(addon, original)).toEqual(true)
})

it('should return null', () => {
  expect(addTranslation()).toEqual(null)
})
