# h5-template-vue3


## 初始化依赖
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

### 自动格式化文件
```
npm run lint
```

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
    ├─hooks                     —— hook函数  
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
├─babel.config.js         
├─package-lock.json    
├─package.json   
├─postcss.config.js             —— postcss配置文件
├─README.md    
├─tsconfig.json    
├─vue.config.js                 —— vue全局配置文件
```