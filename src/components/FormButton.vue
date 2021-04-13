<template>
  <button type="submit">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'form-button'
}
</script>

<style scoped>
button {
  background: #3e64ff;
  border-color: #3e64ff;
  color: #fff;
  margin: 0.5rem 0 0;
  display: inline-block;
  padding: 0.5rem 2rem;
  cursor: pointer;
  border: 0;
  font-weight: 700;
  box-shadow: 0px 10px 20px -6px rgb(0 0 0 / 12%);
  border: 1px solid white;
}

button:focus {
  outline: 1px solid #686868;
}
</style>
