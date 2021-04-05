<template>
  <real-digital-form
    action="https://httpbin.org/post"
    method="POST"
    ref="form"
    @on-button-click="handleClick"
    @on-submit="handleSubmit"
    @on-response="handleResponse"
  >
    <real-digital-textfield name="name" validation="[a-z]+" />
    <real-digital-textfield name="phone" validation="[0-9]+" />
    <real-digital-textfield name="subject" />
    <real-digital-button>Send</real-digital-button>
  </real-digital-form>

  <span class="status" v-if="status">{{ status }}</span>
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

    const handleClick = () => {
      status.value = ''
    }

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
      handleResponse,
      handleClick
    }
  }
}
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
