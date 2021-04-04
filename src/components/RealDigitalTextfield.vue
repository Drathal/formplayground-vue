<template>
  <p>
    <label
      >{{ name }}
      <input
        v-model="value"
        :placeholder="name"
        :name="name"
        :pattern="validation"
      />
    </label>
  </p>
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
