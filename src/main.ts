import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible';
import '@/assets/css/common.scss';
import vconsole from 'vconsole'

if (process.env.NODE_ENV !== "production") {
	new vconsole()
}

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');