import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible';
import '@/assets/css/common.scss';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');

/* eslint-disable */
app.config.errorHandler = function(err: any) {
	const env = process.env.NODE_ENV;
	if (env === 'production') {
		// 只上报线上错误
		const obj = {
			w_file: window.location.href, // 发生错误页面
			stack: err.stack.toString(), // 错误栈
			w_col: 0,
			w_line: 0,
			w_msg: err.message // 错误信息
		};

		if (window.__wpk) {
			window.__wpk.sendError(obj);
		}
	}
	console.error(err);
};
/* eslint-enable */
