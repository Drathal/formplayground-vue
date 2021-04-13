import { render, screen } from '@testing-library/vue'
import FormTextfield from './FormTextfield.vue'

describe('<form-textfield />', () => {
  it('can render a custom label', async () => {
    render(FormTextfield, {
      props: { name: 'testName', value: 'testValue', validation: '[0-9]+' }
    })
    expect(screen.queryByText('testName')).toBeTruthy()
  })
})
