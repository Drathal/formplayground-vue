/**
 * Transforms a DOM Form and returns an object with form data
 * important: its only a optimistic implementation :D good enough for input fields
 *
 * @param {HTMLCollection} form - A DOM Form element
 * @return {object} form data as object / json
 */
export default (form) =>
  Object.values(form.value.elements).reduce((prevData, element) => {
    return {
      ...prevData,
      ...(element.name && { [element.name]: element.value })
    }
  }, {})
