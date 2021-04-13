/**
 * Validates a DOM Form and return an array with all errors
 * An empty form is also valid
 *
 * @param {HTMLFormElement} form - A DOM Form element
 * @return {string[]} array with error strings
 */
export default (form) => {
  const formElements = [...form.elements]
  if (!formElements) {
    return
  }

  const formErrors = formElements.reduce((prevData, element) => {
    const invalid = element.name && !element.validity.valid
    const newError = `Formfield ${element.name} is Invalid`

    if (!invalid || !element.name) {
      return prevData
    }

    return [...prevData, newError]
  }, [])

  return formErrors
}