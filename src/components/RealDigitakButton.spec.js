
import { render, screen } from '@testing-library/vue'
import RealDigitalButton from './RealDigitalButton.vue'

describe('<real-digital-button />', () => {
  it('can render a custom label', async () => {
    render(RealDigitalButton, { slots:  { default: 'ButtonText' }})
    expect(screen.queryByText('ButtonText')).toBeTruthy()
  })
})

