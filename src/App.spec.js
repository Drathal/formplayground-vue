
import { render, screen, fireEvent } from '@testing-library/vue'
import axios from 'axios'
import App from './App.vue'

jest.mock('axios')

describe('<App />', () => {
  it('has three Textfields and a Send Button ', async () => {
    render(App)
    expect(screen.getByLabelText('name')).toBeTruthy()
    expect(screen.getByLabelText('phone')).toBeTruthy()
    expect(screen.getByLabelText('subject')).toBeTruthy()
    expect(screen.queryByText('Send')).toBeTruthy()
  })

  it('validates the name Field ', async () => {
    render(App)
    const nameInput = screen.getByLabelText('name')
    await fireEvent.update(nameInput, 'Invalid because UPPERCASE')

    const button = screen.getByText('Send')
    await fireEvent.click(button)

    expect(screen.queryByText('Formfield name is Invalid')).toBeTruthy()
  })

  it('validates the phone Field ', async () => {
    render(App)
    const phoneInput = screen.getByLabelText('phone')
    await fireEvent.update(phoneInput, 'Invalid because Text')

    const button = screen.getByText('Send')
    await fireEvent.click(button)

    expect(screen.queryByText('Formfield phone is Invalid')).toBeTruthy()
  })

  it('send data to an api ', async () => {

    const spy = axios.mockImplementationOnce(() => Promise.resolve({ status: 200 }));
    const formInput =  {
      "name": "bob",
      "phone": "335577",
      "subject": "any text"
    }
    const expectedApiCall = {
      "data": {
        "name": "bob (modified)",
        "phone": "335577",
        "subject": "any text"
      },
      "method": "POST",
      "url": "https://httpbin.org/post"
    }

    render(App)

    const nameInput = screen.getByLabelText('name')
    await fireEvent.update(nameInput, formInput.name)

    const phoneInput = screen.getByLabelText('phone')
    await fireEvent.update(phoneInput, formInput.phone)

    const subjectInput = screen.getByLabelText('subject')
    await fireEvent.update(subjectInput, formInput.subject)

    const button = screen.getByText('Send')

    await fireEvent.click(button)

    await screen.findByText('Response Status: 200')

    expect(spy).toBeCalledWith(expectedApiCall)
  })
})

