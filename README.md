# Form Element

The goal is to write a series of reusable Vue.js elements that can send user-entered data to a server.

```html
<form-field action="https://httpbin.org/post" method="POST">
  <form-textfield name="name" validation="[a-z]+"><form-textfield>
  <form-textfield name="phone" validation="[0-9]+"></form-textfield>
  <form-textfield name="subject"></form-textfield>

  <form-button>Send</form-button>
</form-form>
```

- ✔️ The `<form-form />` element encapsulates a form.
- ✔️ It exposes a method submit to send the data programatically.
- ✔️ Furthermore, when the child element `<form-button />` is clicked, the form will also be submitted.
- ✔️ `<form-form />` always sends a json encoded request to the endpoint specifiedin the attribute action with the HTTP method specified in the attribute method.
- ✔️ The values of all child elements `<form-textfield />` will be the form data.
- ✔️ The json key of each textfield value is specified in the attribute name.
- ✔️ Before sending, the element should also dispatch an onSubmit event with the form data in the event payload before the data is sent to the target.
- ✔️ Event listeners to onSubmit can edit the form data on their behalf.
- ✔️ The submitting process will only take place when the validation of each `<form-textfield />` succeeds.
- ✔️ The validation is specified as a regular expression in the attribute validation of `<form-textfield />`.
- ✔️ In case of a validation error, the submit will be aborted and the errors are shown in a p tag below the `<form-textfield />`.
- ✔️ When the server responds, the onResponse event, which has the HTTP response in the payload, should be triggered.
