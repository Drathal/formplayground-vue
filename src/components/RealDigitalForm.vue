<template>
  <form @submit.prevent="handleSubmit" ref="realDigitalForm" novalidate>
    <slot />
  </form>
  <p v-for="error in errors" :key="error">
    {{ error }}
  </p>
</template>

<script>
import { ref } from 'vue'

import { getJsonDataFromForm, sendRequest, validateForm } from '../utils'

const realDigitalForm = ref(null)
const errors = ref([])

const submitForm = async (emit, action, method, formData) => {
  const response = await sendRequest(action, method, formData)
  emit('onResponse', response)
}

const hasErrors = (form) => {
  const formErrors = validateForm(form)
  const hasError = formErrors.length > 0
  errors.value = formErrors

  return hasError
}

const handleSubmit = (emit) => () => {
  emit('onButtonClick')

  if (hasErrors(realDigitalForm)) {
    return
  }

  const formJson = getJsonDataFromForm(realDigitalForm)
  emit('onSubmit', formJson)
}

export default {
  name: 'real-digital-form',
  emits: ['onSubmit', 'onResponse', 'onButtonClick'],
  props: {
    action: {
      type: String,
      required: true
    },
    method: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    return {
      errors,
      realDigitalForm,
      handleSubmit: handleSubmit(emit),
      submit: (data) => submitForm(emit, props.action, props.method, data)
    }
  }
}
</script>

<style scoped>
form {
  color: #444;
  background: #fff;
  border: 1px solid #eee;
  display: block;
  width: 30rem;
  padding: 1rem;
  margin: 0 auto 1rem;
  border-radius: 0.25rem;
  box-shadow: 0px 10px 20px -6px rgb(0 0 0 / 52%);
}

p {
  width: 30rem;
  background: #ff5b3e;

  color: #fff;

  display: block;

  padding: 0.25rem 1rem;
  cursor: pointer;

  border: 0;
  margin: 0 auto;

  font-weight: 400;
  box-shadow: 0px 10px 20px -6px rgb(0 0 0 / 12%);
}
</style>
