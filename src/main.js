const { createApp } = require('vue');
import App from './App.vue';
import STable from '@surely-vue/table';
const app = createApp(App);

app.use(STable);

app.mount('#app');
