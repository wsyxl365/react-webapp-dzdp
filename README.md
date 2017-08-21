仿大众点评react webapp
==========
## 产品展示： 
<img src="https://github.com/wsyxl365/react-webapp-dzdp/blob/master/dzdp-show.jpg"/>

## 介绍： 
使用React技术栈全家桶，koa作为后台编写mock数据，开发的一款仿大众点评WebApp。

## 项目运行： 
### dev 
1. npm install
2. 运行 npm run mock， 再运行 npm start
3. dev-server 运行端口是 8080

### mock 
1. npm run mock 开启mock服务器 端口是3000
3. 文件名可以为使用接口的组件名小写
3. 使用koa作为接口后台

### 目录约定(src下)
1. containers目录存放容器组件，与routeMap.jsx相对应，其展示组件存放于components文件夹对应目录
2. components下是木偶组件，可以专门接收数据渲染页面
4. router 应用路由配置
5. index.js 应用入口文件
6. utils目录用于封装工具函数，如localStorage等
