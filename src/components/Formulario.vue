

<script setup>
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Carrinho from './components/Carrinho.vue';
import Formulario from './components/Formulario.vue';

</script>
<template><div class="carrinho">
    <div class="card-livro">
    
       


    <div v-if="mostrarFormulario">
      <h2>Formulário de Pagamento</h2>
  <form class="container" @submit="processarPagamento">
   
    <label for="nome">Nome:</label>
    <input type="text" id="nome" v-model="formData.nome" required>

    <label for="email">Email:</label>
    <input type="email" id="email" v-model="formData.email" required>

    <label for="senha">Senha:</label>
    <input type="password" id="senha" v-model="formData.senha" required>

    <label for="cartao">Número do Cartão de Crédito ou Débito: </label>
    <input type="text" id="cartao" v-model="formData.cartao" required>

    <label for="cep">CEP:</label>
    <input type="text" id="cep" v-model="formData.cep" required >
    <button type="submit" @click="processarPagamento">Enviar</button>
  </form>
</div>
</div>
</div></template>