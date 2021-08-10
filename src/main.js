import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js'


const app = createApp(App)

// Make app aware of routes; using the built in "use" method
app.use(router);

app.mount('#app');