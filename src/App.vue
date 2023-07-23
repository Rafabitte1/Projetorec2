<script setup>
import ListagemLivros from '@/components/ListagemLivros.vue'
import MeuCarrinho from '@/components/MeuCarrinho.vue'
</script>

<template>
  <h1> livraria cietifica</h1>
  <div class="container-geral">
    <listagem-livros />
    <meu-carrinho />
  </div>
</template>

<style scoped>
.container-geral {
  display: grid;
  grid-template-columns: 3fr 1fr;
}
h1{
  text-align: center;
  contain: content;
  position: relative;
  font-size: 28px;
}
.h1::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #f06, #ff0, #0f6, #06f);
  background-size: 400% 400%;
  opacity: 0;
  z-index: -1;
  animation: brilho 4s linear infinite;
}
</style>
