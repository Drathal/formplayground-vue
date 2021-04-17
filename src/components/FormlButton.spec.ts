import { render, screen } from '@testing-library/vue'
import FormButton from './FormButton.vue'

describe('<form-button />', () => {
  it('can render a custom label', async () => {
    render(FormButton, { slots: { default: 'ButtonText' } })
    expect(screen.queryByText('ButtonText')).toBeTruthy()
  })
})
