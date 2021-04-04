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

import getJsonDataFromForm from '../utils/getJsonDataFromForm'
import sendRequest from '../utils/sendRequest'
import validateForm from '../utils/validateForm'

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

const handleSubmit = (emit, action, method) => () => {
  if (hasErrors(realDigitalForm)) {
    return
  }

  const formJson = getJsonDataFromForm(realDigitalForm)
  emit('onSubmit', formJson)
}

export default {
  name: 'real-digital-form',
  emits: ['onSubmit', 'onResponse'],
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
      handleSubmit: handleSubmit(emit, props.action, props.method),
      submit: (data) => submitForm(emit, props.action, props.method, data)
    }
  }
}
</script>
