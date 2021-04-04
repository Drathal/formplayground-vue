export default (form) =>
  Object.values(form.value.elements).reduce((prevData, element) => {
    return {
      ...prevData,
      ...(element.name && { [element.name]: element.value })
    }
  }, {})