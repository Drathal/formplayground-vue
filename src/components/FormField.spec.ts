import { render, screen } from '@testing-library/vue'
import FormField from './FormField.vue'

describe('<form-field />', () => {
  it('can render slots', async () => {
    render(FormField, {
      props: { method: 'POST', action: 'testaction' },
      slots: { default: 'testSlot' }
    })
    expect(screen.queryByText('testSlot')).toBeTruthy()
  })
})
