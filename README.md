仿大众点评react webapp
==========
## 产品展示： 
![](http://www.gosolo.top/img/dzdp-show.jpg) 

## 项目约定： 
### dev 约定
1. 开发需要先运行 npm run mock， 再运行 npm start
2. dev-server 运行端口是 8080

### mock 约定
1. npm run mock 开启mock服务器 端口是3000
2. api模拟的url形式统一为 `/api?views=页面模块名&filename=文件名(&error=状态码)` 添加了error参数返回了错误提示， 约定数据结构为
```javascript
{
  msg: '错误信息',
  code: '错误码',  //开发阶段用状态吗模拟错误码
  request: '请求的url地址'
}

```
3. 文件名可以为使用接口的组件名小写，如果该组件使用多个接口，可以加编号如：test01.json, test02.json 对应的是 Test.js组件的接口文件
3. api目录下文件夹要与views目录对应
4. 静态资源目录为 `mock/static`

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

### 目录约定(mock下)
1. api/views/components 目录用防止mock对应模块的json文件，如home页面的advertisement组件 `api/home/advertisement01.json`后面01为该组件要获取的第一个api
2. static 用于放置静态资源,比static/imgs下有图片img01.png，可以通过localhost:8080/imgs/img01.png获取
3. function与server.js为mock服务器文件

### test约定
1. test/mocha.opts 为mocha测试默认配置， 即使测试不是写在test文件下，也默认使用该配置
2. 建议测试文件写在要测的组件/redux/utils同个目录 开发时候在相对应的目录命令行运行mocha 并指定 -w
3. npm run test 测试应用src目录下（不管哪一层级)所有的test测试文件， 这是个。。。。其实就是运行给老板看的*********，实际开发还是在test测试文件所在目录直接命令行打开mocha


## 其他注意 
* bindActionCreators中 actionCreators参数可以是一个action creator或者是键值是actioncreate的对象

