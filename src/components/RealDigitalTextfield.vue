<template>
  <div>
    <label :for="name">{{ name }}</label>
    <input
      v-model="value"
      :placeholder="name"
      :name="name"
      :id="name"
      :pattern="validation"
    />
  </div>
</template>

<script>
export default {
  name: 'real-digital-textfield',
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: false
    },
    validation: {
      type: String,
      required: false
    }
  }
}
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
}
</style>
