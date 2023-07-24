<script setup>
import { finalizarCompra } from '../_data/carrinho';
import MButton from './MButton.vue'

const props = defineProps({
  livro: Object
})

const emit = defineEmits(['adicionarAoCarrinho'])
function formatarPreco(preco) {
  return 'R$ ' + preco.toFixed(2).replace('.', ',')
}
</script>

<template>
  <div class="card-livro">
    <div class="card-info-livro">
      <div class="wrap-livro">
        <img :src="props.livro.img" alt="Capa do livro" class="capa-livro" />
      </div>
      <p class="titulo-livro">{{ props.livro.title }}</p>
      <p class="autor-livro">{{ props.livro.author }}</p>
      <p class="preco-livro">{{ formatarPreco(props.livro.price) }}</p>
    </div>
    <div class="card-buttons-livros">
      <m-button
        @click="emit('adicionarAoCarrinho', props.livro)"
        text="Adicionar ao carrinho"
      ></m-button>
      <m-button
        @click="finalizarCompra(props.livro)"
        v-if="!compraFinalizada"
        text="Finalizar compra"
      ></m-button>
      <m-button
        v-if="compraFinalizada"
        class="mensagem-finalizada"
        text="Finalizar compra"
      >
        <h2>Compra Finalizada!</h2>
        <p>Obrigado pela compra! Seu pedido foi processado com sucesso.</p>
      </m-button>
      <m-button text="Compartilhar" />
    </div>

    
  </div>
</template>

<style scoped>
.card-livro {
  margin: 5px 10px;
  padding: 10px;
  background-color: rgb(104, 104, 92);
  border-radius: 10px;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.wrap-livro {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(155, 42, 42);
  border-radius: 10px;
  width: 180px;
  height: 270px;
}
.capa-livro {
  width: 90%;
  max-height: 100%;
}

.card-livro p {
  margin: 0;
}

.card-livro .titulo-livro {
  font-weight: bold;
  margin-bottom: 5px;
}
.mensagem-finalizada {
  margin-top: 20px;
  background-color: #c1f0c1;
  padding: 10px;
  border: 1px solid #75c975;
}
</style>
