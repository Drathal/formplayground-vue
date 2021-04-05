
import { render, screen } from '@testing-library/vue'
import RealDigitalForm from './RealDigitalForm.vue'

describe('<real-digital-form />', () => {
  it('can render slots', async () => {
    render(RealDigitalForm, {
      props:  { method: 'POST', action: 'testaction' },
      slots:  { default: 'testSlot' }
    })
    expect(screen.queryByText('testSlot')).toBeTruthy()
  })
})

