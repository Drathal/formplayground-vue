type FormElement = HTMLInputElement | HTMLTextAreaElement

/**
 * Validates a DOM Form and return an array with all errors
 * An empty form is also valid
 */
export default (form: HTMLFormElement): string[] => {
  const formElements = [...form.elements] as FormElement[]
  if (!formElements) {
    return []
  }

  const formErrors = formElements.reduce(
    (prevData: string[], element: FormElement) => {
      if (element.type !== 'text') {
        return prevData
      }

      const invalid = element.name && !element.validity.valid
      const newError = `Formfield ${element.name} is Invalid`

      if (!invalid || !element.name) {
        return prevData
      }

      return [...prevData, newError]
    },
    []
  )

  return formErrors
}
