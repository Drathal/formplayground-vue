<template>
  <real-digital-form
    action="https://httpbin.org/post"
    method="POST"
    ref="form"
    @on-submit="handleSubmit"
    @on-response="handleResponse"
  >
    <real-digital-textfield name="name" validation="[a-z]+" />
    <real-digital-textfield name="phone" validation="[0-9]+" />
    <real-digital-textfield name="subject" />
    <real-digital-button>Send</real-digital-button>
  </real-digital-form>

  {{ status }}
</template>

<script>
import { ref } from 'vue'

import RealDigitalForm from './components/RealDigitalForm.vue'
import RealDigitalTextfield from './components/RealDigitalTextfield.vue'
import RealDigitalButton from './components/RealDigitalButton.vue'

export default {
  name: 'App',
  components: {
    RealDigitalForm,
    RealDigitalTextfield,
    RealDigitalButton
  },
  setup() {
    const form = ref(null)
    const status = ref('')

    const handleSubmit = (formData) => {
      formData.name = `${formData.name} (modified)`
      form.value.submit(formData)
    }

    const handleResponse = (response) => {
      status.value = `Response Status: ${response.status}`
    }

    return {
      status,
      form,
      handleSubmit,
      handleResponse
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
