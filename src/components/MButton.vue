<script setup>
const props = defineProps({
  text: String
})
import { exibirFormulario } from '../_data/carrinho';
</script>

<template>
  <button>{{ props.text }}</button>
</template>

<style scoped>
button {
  background-color: rgb(53, 53, 95);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 5px;
}

button:hover {
  background-color: darkblue;
}
</style>
