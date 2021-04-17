<template>
  <form-field
    ref="form"
    action="https://httpbin.org/post"
    method="POST"
    @on-submit="handleSubmit"
    @on-response="handleResponse"
  >
    <form-textfield name="name" validation="[a-z]+" />
    <form-textfield name="phone" validation="[0-9]+" />
    <form-textfield name="subject" />
    <form-button>Send</form-button>
  </form-field>

  <span v-if="status" class="status">{{ status }}</span>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

import FormField from './components/FormField.vue'
import FormTextfield from './components/FormTextfield.vue'
import FormButton from './components/FormButton.vue'

interface FormData {
  name: string
  phone: string
  subject: string
}

interface ResponseData {
  status: string
}

export default defineComponent({
  name: 'app',
  components: {
    FormField,
    FormTextfield,
    FormButton
  },
  setup() {
    const form = ref(null)
    const status = ref('')

    const handleSubmit = (formData: FormData) => {
      status.value = ''
      formData.name = formData.name ? formData.name : `john`
    }

    const handleResponse = (response: ResponseData) => {
      status.value = `Response Status: ${response.status}`
    }

    return {
      status,
      form,
      handleSubmit,
      handleResponse
    }
  }
})
</script>

<style>
html {
  height: 100%;
}

body {
  background: -webkit-linear-gradient(bottom, #0250c5, #d43f8d);
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}

.status {
  margin: 0.5rem 0;
  display: inline-block;
  background: #5ea356;
  padding: 0.5rem 2rem;
  color: white;
}
</style>
