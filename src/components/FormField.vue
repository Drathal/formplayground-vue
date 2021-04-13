<template>
  <form ref="formRef" novalidate @submit.prevent="handleSubmit">
    <slot />
  </form>
  <transition-group name="fade">
    <p v-for="error in errors" :key="error">
      {{ error }}
    </p>
  </transition-group>
</template>

<script>
import { ref } from 'vue'

import { getJsonDataFromForm, sendRequest, getFormErrors } from '../utils'

const formRef = ref(null)
const errors = ref([])

const handleSubmit = (emit, action, method) => async () => {
  const formJson = getJsonDataFromForm(formRef.value)
  emit('onSubmit', formJson)

  const elements = [...formRef.value.elements]
  elements.map((element) => {
    element.value = formJson[element.name]
  })

  if (!formRef.value.checkValidity()) {
    errors.value = getFormErrors(formRef.value)
    return
  }

  const response = await sendRequest(action, method, formJson)
  emit('onResponse', response)
}

export default {
  name: 'form-field',
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
  emits: ['onSubmit', 'onResponse'],
  setup(props, { emit }) {
    return {
      errors,
      formRef,
      handleSubmit: handleSubmit(emit, props.action, props.method)
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
