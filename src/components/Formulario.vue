<script setup>
import { carrinho } from '@/_data/livros.js'
import { compraFinalizada } from '../_data/carrinho';

</script>


<template>
    <div class="container">
      <h1>Cadastro</h1>
      <form @submit.prevent="submitForm">
        <label for="nome">Nome Completo:</label>
        <input type="text" id="nome" v-model="formData.nome" required><br>
  
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="formData.email" required><br>
  
        <label for="senha">Senha:</label>
        <input type="password" id="senha" v-model="formData.senha" required><br>
  
        <label for="cartao">Cartão de Crédito ou Débito:</label>
        <input type="text" id="cartao" v-model="formData.cartao" required><br>
  
        <label for="cep">CEP:</label>
        <input type="text" id="cep" v-model="formData.cep" required><br>
  
        <input type="submit" value="Finalizar a Compra">
      </form>
      <div v-if="compraFinalizada" class="mensagem-finalizada">
      <p>Compra Finalizada com Sucesso!</p>
      <router-link to="/listagemLivros.vue">Ver Lista de Livros</router-link>
    </div>

    </div>
  </template>
  
  <style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}


</style>
  