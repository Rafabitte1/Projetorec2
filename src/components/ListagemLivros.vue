<script setup>
import { livros } from '@/_data/livros.js'
import { adicionarAoCarrinho } from '@/_data/carrinho.js'

import { exibirFormulario } from '../_data/carrinho';
import{mostrarFormulario} from '../_data/carrinho';
import {processarPagamento} from '../_data/carrinho'
import CardLivro from '@/components/CardLivro.vue'
</script>

<template>
  <div class="listagem-livros">
    <card-livro
      v-for="livro in livros"
      v-bind:key="livro.id"
      v-bind:livro="livro"
      @adicionarAoCarrinho="adicionarAoCarrinho"
      @exibirFormulario="exibirFormulario"
      @mostrarFormulario="mostrarFormulario"
      @processarPagamento="processarPagamento"
    />
  </div>
</template>

<style scoped>
.listagem-livros {
  display: flex;
  flex-wrap: wrap;
}
</style>
