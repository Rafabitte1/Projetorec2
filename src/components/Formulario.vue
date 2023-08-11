

<script setup>
import {  mostrarFormulario, processarPagamento } from '../_data/carrinho';
import {router}from '../_data/carrinho'
import {formData}from '../_data/carrinho'
import { processarPagamento } from '../_data/carrinho';
function voltarParaCarrinho() {
    router.push({ name: 'ListagemLivros' });
  }
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
  <button @click="voltarParaCarrinho">Voltar</button> 
</div>
</div>
</div></template>