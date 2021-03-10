/* eslint-disable */
const QiniuWebpackPlugin = require("better-qiniu-webpack-plugin");
const path = require("path");
function resolve(dir) {
	return path.join(__dirname, dir);
}
module.exports = {
	publicPath: "./",
	chainWebpack: config => {
		config.resolve.alias.set("@", resolve("src"));
		if (process.env.NODE_ENV === "production") {
			// 生产模式 console.log 去除
			config.optimization.minimizer("terser").tap(args => {
				Object.assign(args[0].terserOptions.compress, {
					drop_console: true,
					pure_funcs: ["console.log"]
				});
				return args;
			});

			// 静态资源上传七牛CDN
			config.plugin("QiniuWebpackPlugin").use(QiniuWebpackPlugin, []);
		}
	},
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					require("postcss-plugin-px2rem")({
						rootValue: 75, // 换算基数,默认100.
						exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
						mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
						minPixelValue: 3 // 设置要替换的最小像素值(小于3px像素不会被转成rem)。 默认 0
					})
				]
			}
		}
	},
	devServer: {
		open: true,
		host: "0.0.0.0",
		port: 8081,
		overlay: {
			errors: true,
			warnings: true
		},
		proxy: {
			"/api": {
				target: "https://r.51wnl-cq.com",
				changeOrigin: true, // target是域名的话，需要这个参数，
				secure: false // 设置支持https协议的代理
				// headers: {
				// 	Referer: 'https://r.51wnl-cq.com'
				// }
			}
		}
	},
	lintOnSave: process.env.NODE_ENV !== "production" //是否关闭eslint true or false
};
