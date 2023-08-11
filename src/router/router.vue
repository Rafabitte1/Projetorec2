<script setup>
import { ref } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import MeuCarrinho from '@/components/MeuCarrinho.vue';
import {processarPagamento} from '@/_data/carrinho.js'
import {
  processarPagamento,

} from '@/_data/carrinho.js';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/ListagemLivro',
        name: 'Livro',
        component: homeview,
      },
      
      {
        path: '/carrinho',
        name: 'carrinho',
        component: MeuCarrinho
      },
      {
        path: '/processarPagamento',
        name: 'processaePagamento',
        component: processarPagamento
      },
  
      {
        path:'/Formulario',
        name:'formulario',
       component: mostrarFormulario
      },
    ]
    
  },function voltarParaCarrinho() {
    router.push({ name: 'homeviuew' });
  })    
  
  </script>
