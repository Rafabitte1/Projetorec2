<script setup>
import { createRouter, createWebHistory} from "vue-router"
import homeView from '@/views/homeView.vue'
import FormView from '@/views/FormView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'livraria',
      component: homeView
    },
    {
      path: '/formulario',
      name: 'formulario',
      component: FormView
    },

  ]
})



</script>
