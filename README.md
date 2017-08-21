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
1. views目录存放容器组件，与route.js相对应，其展示组件存放于components文件夹对应目录, views目录下组件可以获取属性history,location,match,其子组件想使用这些,可以传递该属性,一般传递history较多
2. components下的shared是被多个views页面共享数据的组件
3. layouts目录放置布局组件，一般来说不会与redux交互，并且可以考虑是无状态函数组件，与shared要区分开
4. reducers 归总所有views页面的reducer
5. routes 应用路由配置
6. app.js 应用入口文件
7. utils目录用于封装工具函数，如localStorage、地理信息获取等
8. static 全局样式和字体文件，其中vendor.styl是样式库，可以在其中封装mixins, stylus [请参考](http://www.zhangxinxu.com/jq/stylus/)
9. tmpl 是html-webpack-plungin调用的模板，多页面应用多模板情况下可以在这添加其他模板


