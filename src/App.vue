<template>
  <RealDigitalForm action="https://httpbin.org/post" method="POST">  
    <RealDigitalTextfield name="name" validation="[a-z]+"></RealDigitalTextfield>
    <RealDigitalTextfield name="phone" validation="[0-9]+"></RealDigitalTextfield>
    <RealDigitalTextfield name="subject"></RealDigitalTextfield>
    <RealDigitalButton>Submit</RealDigitalButton>
  </RealDigitalForm>
</template>

<script setup>
  import RealDigitalForm from './components/RealDigitalForm.vue'
  import RealDigitalTextfield from './components/RealDigitalTextfield.vue'
  import RealDigitalButton from './components/RealDigitalButton.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>