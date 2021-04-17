import getJsonDataFromForm from './getJsonDataFromForm'

describe('getJsonDataFromForm', () => {
  it('returns Form Data as Object', async () => {
    const form = document.createElement('form')
    const input = document.createElement('input')
    input.type = 'text'
    input.name = 'myInput'
    input.value = 'valuetext'
    input.pattern = '/[a-z]+/'
    form.appendChild(input)

    const input2 = document.createElement('input')
    input2.type = 'text'
    input2.name = 'myInput2'
    input2.value = '23'
    input2.pattern = '/[0-9]+/'
    form.appendChild(input2)

    const result = getJsonDataFromForm(form)

    expect(result).toEqual({ myInput: 'valuetext', myInput2: '23' })
  })
})
