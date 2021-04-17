import getFormErrors from './getFormErrors'

describe('getFormErrors', () => {
  it('returns errors', async () => {
    const form = document.createElement('form')
    const input = document.createElement('input')
    input.type = 'TEXT'
    input.name = 'myInput'
    input.value = 'Values of my Input'
    input.pattern = '/[a-z]+/'
    form.appendChild(input)

    const result = getFormErrors(form)

    expect(result).toEqual(['Formfield myInput is Invalid'])
  })
})
