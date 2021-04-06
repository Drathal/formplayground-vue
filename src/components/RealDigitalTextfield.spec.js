import { render, screen } from '@testing-library/vue'
import RealDigitalTextfield from './RealDigitalTextfield.vue'

describe('<real-digital-textfield />', () => {
  it('can render a custom label', async () => {
    render(RealDigitalTextfield, {
      props: { name: 'testName', value: 'testValue', validation: '[0-9]+' }
    })
    expect(screen.queryByText('testName')).toBeTruthy()
  })
})
