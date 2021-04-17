type FormElement = HTMLInputElement | HTMLTextAreaElement

interface GenericFormData {
  [key: string]: string
}

/**
 * Transforms a DOM Form and returns an object with form data
 * important: its only a optimistic implementation :D good enough for input fields
 */
export default (form: HTMLFormElement): GenericFormData => {
  const formElements = [...form.elements] as FormElement[]
  const formData = formElements.reduce((prevData, element) => {
    return {
      ...prevData,
      ...(element.name && { [element.name]: element.value })
    }
  }, {})

  return formData
}
