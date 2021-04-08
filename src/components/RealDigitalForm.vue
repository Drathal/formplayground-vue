<template>
  <form ref="realDigitalForm" novalidate @submit.prevent="handleSubmit">
    <slot />
  </form>
  <transition-group name="fade">
    <p v-for="error in errors" :key="error">
      {{ error }}
    </p>
  </transition-group>

  {{ loading }}
  {{ error2 }}
  {{ data }}
</template>

<script>
import { ref } from 'vue'

import { getJsonDataFromForm, sendRequest, validateForm } from '../utils'
import useFetch from '../hooks/useFetch'

const realDigitalForm = ref(null)
const errors = ref([])

const submitForm = async (emit, action, method, formData, fetchData) => {
  const response = await sendRequest(action, method, formData)

  fetchData(formData, action, method)

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

  if (hasErrors(realDigitalForm.value)) {
    return
  }

  const formJson = getJsonDataFromForm(realDigitalForm.value)
  emit('onSubmit', formJson)
}

export default {
  name: 'real-digital-form',
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
  emits: ['onSubmit', 'onResponse', 'onButtonClick'],
  setup(props, { emit }) {
    const { loading, error, data, fetchData } = useFetch()

    return {
      loading,
      error2: error,
      data,

      errors,
      realDigitalForm,
      handleSubmit: handleSubmit(emit, fetchData),
      submit: (data) =>
        submitForm(emit, props.action, props.method, data, fetchData)
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
  text-align: right;
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

.fade-enter-active {
  animation: bounce-in 0.5s;
}
.fade-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  65% {
    transform: translateY(5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
