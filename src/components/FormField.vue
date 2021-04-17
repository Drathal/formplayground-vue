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

<script lang="ts">
import { ref, defineComponent, PropType } from 'vue'

import { getJsonDataFromForm, getFormErrors } from '../utils'
import sendRequest, { Method, HttpResponse } from '../utils/sendRequest'

type FormElement = HTMLInputElement | HTMLTextAreaElement
interface GenericFormData {
  [key: string]: string
}

const formRef = ref<HTMLFormElement | null>(null)
const errors = ref<string[]>([])

export default defineComponent({
  name: 'form-field',
  props: {
    action: {
      type: String,
      required: true
    },
    method: {
      type: String as PropType<Method>,
      required: true
    }
  },
  emits: {
    onSubmit: (formData: GenericFormData) => true || formData,
    onResponse: (response: HttpResponse<GenericFormData>) => true || response
  },
  setup(props, { emit }) {
    const handleSubmit = async () => {
      if (!formRef.value) {
        return
      }

      const formJson = getJsonDataFromForm(formRef.value)
      emit('onSubmit', formJson)

      const elements = [...formRef.value.elements] as FormElement[]
      elements.map((element) => {
        element.value = formJson[element.name]
      })

      errors.value = []
      if (!formRef.value.checkValidity()) {
        errors.value = getFormErrors(formRef.value)
        return
      }

      const response = await sendRequest<typeof formJson>(
        props.action,
        props.method,
        formJson
      )

      emit('onResponse', response)
    }

    return {
      errors,
      formRef,
      handleSubmit
    }
  }
})
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
