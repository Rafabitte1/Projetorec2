// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
import router from './router'; // Certifique-se de ter importado e configurado o Vue Router corretamente

const app = createApp(App);

app.use(router); // Use o router

app.mount('#app');