# vue3-performance-cdn

## 项目初始化
```
npm install
```

### 开发环境
```
npm run dev
```

### 测试环境 构建完成后自动上传测试环境
```
npm run test
```

### 生产环境 构建完成后静态资源自动上传CDN
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).    


### 项目结构
```
├─public   
│     favicon.ico   
│     index.html   
├─dist                          —— 打包输出目录    
│        
└─src                           —— 开发目录    
    │  App.vue  
    │  main.ts   
    │  shims-vue.d.ts           —— vue ts 文件模块声明   
    │     
    ├─api                       —— 后端接口目录    
    │      index.ts				   
    │        
    ├─assets                    —— 静态资源    
    │            
    ├─components                —— 组件    
	│
    ├─router                    —— 页面路由    
    │      index.ts    
    │        
    ├─store	                    —— vuex状态管理    
    │      index.ts    
    │        
    ├─utils                     —— 工具目录    
    │      request.ts    
    │        
    └─views                     —— 页面    
    │        About.vue    
    │        Home.vue    
├─.browserslistrc     
├─.eslintrc.js                  —— eslint配置文件    
├─.gitignore    
├─.qiniu-webpack.js             —— 七牛云上传配置文件    
├─babel.config.js     
├─deplay.json                   —— ftp上传配置文件    
├─package-lock.json    
├─package.json   
├─postcss.config.js    
├─README.md    
├─tsconfig.json    
├─vue.config.js    
```

### 初始化项目后注意点
```
1. 修改项目根目录下.qiniu-webpack.js中uploadPath字段，调整为项目名称，比如：vue3-performance-cdn    
2. 修改项目根目录下deplay.json中remoteRoot字段，比如：/mobile.51wnl.com/vue3-performance-cdn, 执行打包测试环境    
命令后（npm/yarn run test）,访问http://mobile.51wnl-cq.com/vue3-performance-cdn/#/    
3.前端监控准备工作：
    1.向中台组提供项目名称，中台组需要调整apollo配置。
    2.修改根目录public/index.html文件中_bid字段，调整为项目名称，比如：vue3-performance-cdn。
```