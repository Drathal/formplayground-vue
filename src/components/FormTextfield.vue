<template>
  <div>
    <label :for="name">{{ name }}</label>
    <input
      :id="name"
      :placeholder="name"
      :name="name"
      :value="value"
      :pattern="validation"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'form-textfield',
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: false,
      default: ''
    },
    validation: {
      type: String,
      required: false,
      default: null
    }
  }
})
</script>

<style scoped>
div {
  display: flex;
  margin: 0 auto 0.5rem;
}

label {
  flex: 1;
  padding: 0.5rem 0.5rem;
  display: block;
  font-size: 14px;
  font-weight: 400;
  text-align: right;
}

input {
  color: #686868;
  display: block;
  border: 0;
  background: #e6e6e6;
  font-size: 14px;
  padding: 0.5rem 0.5rem;
  flex: 2;
  border: 1px solid white;
}

input:invalid {
  background: #f8c1b8;
}

input::placeholder {
  color: #b8b8b8;
  opacity: 1;
}

input:focus {
  outline: 1px solid #686868;
  color: black;
}
</style>
