<script setup>
import {livros} from '../_data/livros'
import {processarPagamento} from '../_data/carrinho'
</script>


<template>
    <div class="container">
  <div v-if="mostrarFormulario">
    <form @submit="processarPagamento">
     
      <label for="nome">Nome:</label>
      <input type="text" id="nome" v-model="formData.nome" required>

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email" required>

      <label for="senha">Senha:</label>
      <input type="password" id="senha" v-model="formData.senha" required>

      <label for="cartao">Número do Cartão de Crédito ou Débito:</label>
      <input type="text" id="cartao" v-model="formData.cartao" required>

      <label for="cep">CEP:</label>
      <input type="text" id="cep" v-model="formData.cep" required>

      <button type="submit">Enviar</button>
    </form>
  </div>

  <div v-else>
    <button v-if="livros" @click="processarPagamento" >Finalizar Compra</button>
  </div>
</div>
  </template>
  
  <style scoped>


.container {
  position: relative;
  font-size: medium;
  font-weight: bolder;
}

.elemento {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);

}
</style>
  