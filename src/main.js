import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);
app.use(router);
app.mount('#app');

// createApp({
//     //    router,
//     render: h => h(App)
// }).mount('#app')

