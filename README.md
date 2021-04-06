# Form Element

The goal is to write a series of reusable Vue.js elements that can send user-entered data to a server.
This example HTML snippet should work as described after you implemented the task

```html
<real-digital-form action="https://httpbin.org/post" method="POST">
  <real-digital-textfield name="name" validation="[a-z]+"><real-digital-textfield>
  <real-digital-textfield name="phone" validation="[0-9]+"></real-digital-textfield>
  <real-digital-textfield name="subject"></real-digital-textfield>

  <real-digital-button>Send</real-digital-button>
</real-digital-form>
```

- ✔️ The `<real-digital-form />` element encapsulates a form.
- ✔️ It exposes a method submit to send the data programatically.
- ✔️ Furthermore, when the child element `<real-digital-button />` is clicked, the form will also be submitted.
- ✔️ `<real-digital-form />` always sends a json encoded request to the endpoint specifiedin the attribute action with the HTTP method specified in the attribute method.
- ✔️ The values of all child elements `<real-digital-textfield />` will be the form data.
- ✔️ The json key of each textfield value is specified in the attribute name.
- ✔️ Before sending, the element should also dispatch an onSubmit event with the form data in the event payload before the data is sent to the target.
- ✔️ Event listeners to onSubmit can edit the form data on their behalf.
- ✔️ The submitting process will only take place when the validation of each `<real-digital-textfield />` succeeds.
- ✔️ The validation is specified as a regular expression in the attribute validation of `<real-digital-textfield />`.
- ✔️ In case of a validation error, the submit will be aborted and the errors are shown in a p tag below the `<real-digital-textfield />`.
- ✔️ When the server responds, the onResponse event, which has the HTTP response in the payload, should be triggered.
