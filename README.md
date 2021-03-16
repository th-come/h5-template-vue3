# vue3-performance-cdn

## 项目初始化
```
npm install
```

### 开发环境
```
npm run dev
```

### 测试环境
```
npm run test
```

### 生产环境
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
