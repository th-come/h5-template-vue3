# vue3-performance-cdn

## 创建项目
#### 1.全局安装wnl-cli：  
npm install wnl-cli -g   
创建项目：wnl init project-name   
具体使用方法：[wnl-cli](http://gitlab.ylwnl.com:8081/yaoxiao/wnl-cli)。   
#### 2.安装前使用nrm切换至wnl源:    
具体使用方法：[nrm添加wnl源](http://192.168.1.130:4567/%E5%B0%86npm%E5%AE%89%E8%A3%85%E6%BA%90%E6%8C%87%E5%90%91%E6%B5%8B%E8%AF%95%E6%9C%8D%E5%8A%A1%E5%99%A8)


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

### 初始化项目后修改配置
#### 1.CDN配置文件： 
```
修改项目根目录下.qiniu-webpack.js中uploadPath字段，   
调整为项目名称，比如：uploadPath: '/vue3-performance-cdn/', 
``` 
#### ftp配置文件：
```
修改项目根目录下deplay.json中remoteRoot字段，    
比如："remoteRoot": "/mobile.51wnl.com/vue3-performance-cdn",   
执行打包测试环境命令后（npm/yarn run test）,   
访问测试项目地址：http://mobile.51wnl-cq.com/vue3-performance-cdn/#/    
```
#### 前端监控接入：
```
1.向中台组提供项目名称，中台组需要调整apollo配置。
2.修改根目录public/index.html文件中_bid字段，调整为项目名称，比如：var _bid = "vue3-performance-cdn";。
```